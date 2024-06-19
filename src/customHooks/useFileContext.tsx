import { createContext, useContext } from "react";
import { FileItem } from "../app/07-file-explorer/page";

// Define the shape of the context value
interface FileContextType {
    explorer: FileItem;
    setExplorer: React.Dispatch<React.SetStateAction<FileItem>>;
}

// Create the context with an initial value of undefined
export const FileContext = createContext<FileContextType | undefined>(undefined);

// Create a custom hook to use the context
export const useFileContext = () => {
    const context = useContext(FileContext);
    if (!context) {
      throw new Error('useFileContext must be used within a FileProvider');
    }
    return context;
};