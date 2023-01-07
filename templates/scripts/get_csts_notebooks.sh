if [ -z "$1" ]
then
  source="./notebooks/features"
else
  source="$1"
fi

if [ -z "$2" ]
then
  target="cst"
else
  target="$2"
fi

# Check if the BUILD_ARTIFACTSTAGINGDIRECTORY environment variable is set, if not use relative path
if [ -z "$BUILD_ARTIFACTSTAGINGDIRECTORY" ]
then
  staging_dir="./notebook-artifacts-staging/$target/"
else
  staging_dir="$BUILD_ARTIFACTSTAGINGDIRECTORY/notebook-artifacts-staging/$target/"
fi

echo "staging_dir: $staging_dir"

# Check if the directory exists
if [ ! -d "$staging_dir" ]; then
  # Create the directory if it does not exist
  mkdir -p "$staging_dir"
fi


# Remove all files in the staging directory
rm $staging_dir*

echo "Finding all notebooks in $source which have a target of $target."
# Iterate through the notebook files
while read -r notebook_file; do
  # Read the Jupyter notebook file
  notebook=$(jq -r . "$notebook_file")

  # Extract the targest from notebook metadata
  targets=$(echo $notebook | jq -r '.metadata."synapseml-test-channel".targets')

  # Add notebooks to collection if target is specified
  if [[ "$targets" =~ $target ]]
  then
    echo "Notebook $notebook_file has a target for $target. Moving to staging directory $staging_dir"
    cp "$notebook_file" "$staging_dir"
  fi  
done < <(find $source -name "*.ipynb")

#Remove spaces and hyphens from file names in staging directory
find $staging_dir -type f -name "* *.ipynb" | while read file; do
  filename=$(basename -- "$file")
  extension="${filename##*.}"
  filename="${filename%.*}"

  new_name=$(echo $filename | tr -d " -.")
  echo "Renaming $file to $new_name.$extension"
  mv "$file" $staging_dir/"$new_name.$extension"
done

# Activate the conda environment
source activate synapseml

# Convert each notebook to Python
for notebook in "$staging_dir/*.ipynb"
do
    jupyter nbconvert --to python "$notebook"
done

# Clean up jupyter notebooks
echo "Removing all *.ipynb files from staging directory"
rm $staging_dir*.ipynb

# Iterate through the files in the directory
find $staging_dir -name '*.py' -exec jq -n --arg path {} '{ path: $path }' \; | jq -n -s '{ notebooks: inputs }' > $staging_dir/manifest.json
echo "Manifest file:"
cat $staging_dir/manifest.json
