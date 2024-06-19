'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import FileExplorer from '../../components/FileExplorer';
import files from '../../mockData/file-explorer';

// Define the shape of a file item
interface FileItem {
  id: string;
  name: string;
  isFolder: boolean;
  items: FileItem[];
  isVisible?: boolean;
}

// Define the shape of the context value
interface FileContextType {
  explorer: FileItem;
  setExplorer: React.Dispatch<React.SetStateAction<FileItem>>;
}

// Create the context with an initial value of undefined
const FileContext = createContext<FileContextType | undefined>(undefined);

// Create a custom hook to use the context
const useFileContext = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error('useFileContext must be used within a FileProvider');
  }
  return context;
};

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
export { useFileContext, FileContext };
