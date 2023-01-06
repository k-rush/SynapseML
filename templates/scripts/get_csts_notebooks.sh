# Set the directory path
source="./notebooks/features/"
destination="./staging/"
target="cst"

# Remove all files in the staging directory
rm $destination*

# Get all Jupyter notebook files in the directory

notebook_files_with_cst_target=()

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
    notebook_files_with_cst_target+=($notebook_file)
    cp "$notebook_file" "$destination"
  fi  
done < <(find $source -name "*.ipynb")

echo "Notebooks with a '$target' target: ${notebook_files_with_cst_target[@]}"

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
rm $destination*.ipynb

#Remove spaces and hyphens from file names in staging directory
# Get a list of all files in the directory
python_files=$(find $staging -name "*.py")

# Iterate through the list of files
for file in $python_files; do
  # Replace spaces and hyphens
  new_name=$(echo "$file" | tr ' -' '_')

  # Rename the file
  mv "$file" "$new_name"
done