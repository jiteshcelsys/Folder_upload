import React, { useState } from 'react';
import { buildFileTree } from './helper';
import { TreeNode } from './TreeNode';
import axios from 'axios';

const FolderTreeUpload = () => {
  const [fileTree, setFileTree] = useState(null);

  const uploadFiles = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };
  
  const handleFolderUpload = (event) => {
    const fileList = event.target.files; // FileList object
  
    // Check if files exist
    if (!fileList || fileList.length === 0) {
      console.error('No files selected');
      return;
    }
  
    const formData = new FormData();
  
    // Convert the FileList to an array and append files to formData
    Array.from(fileList).forEach((file) => {
      // Using webkitRelativePath to maintain folder structure
      formData.append('files', file, file.path);
    });
  
    // Send formData to the server
    uploadFiles(formData);
  };

  // const handleFolderUpload = (event) => {
  //   const files = Array.from(event.target.files); // Convert FileList to an array

  //   setTimeout(()=>{
  //   const newTree = buildFileTree(files); // Build tree structure for the new files

  //   console.log(newTree, 'newTree');
  //   // If there is already an existing tree, merge the new one with the old one
  //     setFileTree((prevTree) => {
  //       if (prevTree) {
  //         return { ...prevTree, ...newTree }; // Merge the new tree with the existing one
  //       } else {
  //         return newTree; // Set the new tree if none exists yet
  //       }
  //     });
  //   },10000)
  // };

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
      {/* {fileTree ? (
        <TreeNode name="root" node={{ type: 'folder', children: fileTree }} />
      ) : (
        <p>No folder uploaded.</p>
      )} */}
    </div>
  );
};

export default FolderTreeUpload;

