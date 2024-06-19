import React, { useState, useEffect, useContext } from 'react';
import { useFileContext } from '../customHooks/useFileContext';

interface FileItem {
  id: string;
  name: string;
  isFolder: boolean;
  items: FileItem[];
  isVisible?: boolean;
}

interface FileExplorerProps {
  root: FileItem;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ root }) => {
  const { explorer, setExplorer } = useFileContext();
  const [isVisible, setIsVisible] = useState(true);

  const add = () => {
    const isFolder = window.confirm('Press OK for folder or Cancel for file.');
    const name = window.prompt(isFolder ? 'Give folder name' : 'Give file name');
    if (name) {
      root.items.push({
        id: Date.now().toString(),
        name,
        isFolder,
        items: [],
      });
      setExplorer({ ...explorer });
    }
  };

  const toggle = () => {
    setIsVisible((prev) => {
      root.isVisible = !prev;
      return !prev;
    });
  };

  useEffect(() => {
    if (root.hasOwnProperty('isVisible')) {
      setIsVisible(root.isVisible!);
    } else {
      root.isVisible = isVisible;
    }
  }, [root, isVisible]);

  return (
    <div style={{ paddingLeft: '20px' }}>
      <input
        type="checkbox"
        checked={isVisible}
        id={`checkbox-${root.id}`}
        onChange={toggle}
      />
      <label htmlFor={`checkbox-${root.id}`}>
        <strong style={{ cursor: 'pointer' }} onClick={toggle}>
          🗂️ {root.name}
        </strong>
        <button
          style={{ marginLeft: '10px', padding: '0px 10px', backgroundColor: 'grey' }}
          onClick={add}
        >
          +
        </button>
      </label>

      {isVisible &&
        root.items.map((item) =>
          item.isFolder ? (
            <FileExplorer key={item.id} root={item} />
          ) : (
            <div key={item.id} style={{ paddingLeft: '20px' }}>
              📁 {item.name}
            </div>
          )
        )}
    </div>
  );
};

export default FileExplorer;
