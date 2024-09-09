import React, { useState } from 'react';
import { buildFileTree } from './helper';
import { TreeNode } from './TreeNode';

const FolderTreeUpload = () => {
  const [fileTree, setFileTree] = useState(null);

  const handleFolderUpload = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to an array

    setTimeout(()=>{
    const newTree = buildFileTree(files); // Build tree structure for the new files

    console.log(newTree, 'newTree');
    // If there is already an existing tree, merge the new one with the old one
      setFileTree((prevTree) => {
        if (prevTree) {
          return { ...prevTree, ...newTree }; // Merge the new tree with the existing one
        } else {
          return newTree; // Set the new tree if none exists yet
        }
      });
    },10000)
  };

  return (
    <div>
      <input
        type="file"
        webkitdirectory="true"
        directory=""
        multiple // Allow multiple folders to be selected
        onChange={handleFolderUpload}
      />

      <h3>File Tree Structure:</h3>
      {fileTree ? (
        <TreeNode name="root" node={{ type: 'folder', children: fileTree }} />
      ) : (
        <p>No folder uploaded.</p>
      )}
    </div>
  );
};

export default FolderTreeUpload;

