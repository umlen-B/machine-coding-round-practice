'use client';

import React, { useState, ReactNode } from 'react';
import FileExplorer from '../../components/FileExplorer';
import files from '../../mockData/file-explorer';
import {FileContext} from '../../customHooks/useFileContext';

// Define the shape of a file item
export interface FileItem {
  id: string;
  name: string;
  isFolder: boolean;
  items: FileItem[];
  isVisible?: boolean;
}



interface FileProviderProps {
  children: ReactNode;
}

const FileProvider: React.FC<FileProviderProps> = ({ children }) => {
  const [explorer, setExplorer] = useState<FileItem>(files);

  return (
    <FileContext.Provider value={{ explorer, setExplorer }}>
      {children}
    </FileContext.Provider>
  );
};

const App: React.FC = () => {
  return (
    <FileProvider>
      <div style={{ margin: '20px' }}>
        <FileExplorer root={files} />
      </div>
    </FileProvider>
  );
};

export default App;
