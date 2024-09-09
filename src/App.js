import React, { useState } from 'react';
import { buildFileTree } from './helper';
import { TreeNode } from './TreeNode';

const FolderUpload = () => {
  const [fileTree, setFiles] = useState([]);

  const handleFolderUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const fileList = [];

    for (const file of selectedFiles) {
      fileList.push({
        name: file.name,
        path: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      });
    }
    const tree = buildFileTree(fileList);
    console.log(tree);
    setFiles(tree);
  };

  return (
    <div>
      <input
        type="file"
        webkitdirectory="true"
        directory=""
        multiple
        onChange={handleFolderUpload}
      />
      <h3>Uploaded Folder:</h3>
      <h4>Listing of files inside the folders</h4>
      <ul>
      {fileTree ? (
        <TreeNode name="root" node={{ type: 'folder', children: fileTree }} />
      ) : (
        <p>No folder uploaded.</p>
      )}
      </ul>
    </div>
  );
};

export default FolderUpload;
