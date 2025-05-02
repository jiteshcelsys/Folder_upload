import React from 'react';
// import { buildFileTree } from './helper';
// import { TreeNode } from './TreeNode';
import VirtulaList from './VirtulaList';

const FolderTreeUpload = () => {

  const data = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`
  }));


  return (
    <div>
      <h3>Virtulization:</h3>
      <VirtulaList
      items={data.map(user => (
        <div>
          <strong>{user.name}</strong><br />
          <span>{user.email}</span>
        </div>
      ))}
      itemHeight={150}
      height={300}
      />
    </div>
    
  );
};

export default FolderTreeUpload;

