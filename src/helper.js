export const buildFileTree = (files) => {
    const tree = {};
  
    files.forEach((file) => {
      const relativePath = file.webkitRelativePath || file.name; // Fallback to file name if webkitRelativePath is missing
  
      if (!relativePath) return; // Skip files without a valid path
  
      const parts = relativePath.split('/'); // Split the path by '/'
      let current = tree;
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
