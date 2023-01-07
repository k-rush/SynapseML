# Set the directory path
source="./notebooks/features/"
destination="./staging/"
target="cst"

# Remove all files in the staging directory
rm $destination*

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
    echo "Notebook $notebook_file has a target for $target. Moving to staging directory $destination"
    cp "$notebook_file" "$destination"
  fi  
done < <(find $source -name "*.ipynb")

#Remove spaces and hyphens from file names in staging directory
find $destination -type f -name "* *.ipynb" | while read file; do
  filename=$(basename -- "$file")
  extension="${filename##*.}"
  filename="${filename%.*}"

  new_name=$(echo $filename | tr -d " -.")
  echo "Renaming $file to $new_name.$extension"
  mv "$file" $destination/"$new_name.$extension"
done

# Activate the conda environment
source activate synapseml

# Set the directory containing the notebooks
notebook_dir="./staging"

# Convert each notebook to Python
for notebook in "$notebook_dir/*.ipynb"
do
    jupyter nbconvert --to python "$notebook"
done

# Clean up jupyter notebooks
echo "Removing all *.ipynb files from staging directory"
rm $destination*.ipynb

# Iterate through the files in the directory
find $destination -name '*.py' -exec jq -n --arg path {} '{ path: $path }' \; | jq -n -s '{ notebooks: inputs }' > $destination/manifest.json
echo "Manifest file:"
cat $destination/manifest.json
