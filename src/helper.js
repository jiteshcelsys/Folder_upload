// Helper function to build a tree structure
export const buildFileTree = (files) => {
    const tree = {};
  
    files.forEach((file) => {
      const parts = file.path.split('/'); // Split the path by '/'
      let current = tree;
  
      // Loop through each part of the path
      parts.forEach((part, index) => {
        if (index === parts.length - 1) {
          // If it's the last part, it's a file
          current[part] = {
            type: 'file',
            name: part,
            size: file.size,
          };
        } else {
          // If it's a folder, create it if it doesn't exist
          current[part] = current[part] || { type: 'folder', children: {} };
          current = current[part].children;
        }
      });
    });
  
    return tree;
  };
  