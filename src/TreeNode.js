import { useState } from "react";

export const TreeNode = ({ node, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (node.type === 'folder') {
    return (
      <div>
        <span onClick={toggleOpen} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          {isOpen ? '📂' : '📁'} {name}
        </span>
        {isOpen && (
          <div style={{ marginLeft: 20 }}>
            {Object.keys(node.children).map((childName) => (
              <TreeNode key={childName} name={childName} node={node.children[childName]} />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (node.type === 'file') {
    return (
      <div>
        <span>📄 {name} ({node.size} bytes)</span>
      </div>
    );
  }

  return null;
};