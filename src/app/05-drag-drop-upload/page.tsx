'use client'
import React, { useState, useCallback, DragEvent, ChangeEvent } from 'react';
import './style.css';

interface FileWithPreview {
  id: string;
  file: File;
  preview: string;
}

const App: React.FC = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const handleDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files).map(file => ({
      id: URL.createObjectURL(file),
      file,
      preview: URL.createObjectURL(file)
    }));
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  }, []);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []).map(file => ({
      id: URL.createObjectURL(file),
      file,
      preview: URL.createObjectURL(file)
    }));
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const uploadFile = (file: File) => {
    alert('Upload triggered')
    // const url = 'YOUR_UPLOAD_ENDPOINT';
    // const formData = new FormData();
    // formData.append('file', file);

    // fetch(url, {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('File uploaded successfully:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error uploading file:', error);
    //   });
  };

  return (
    <div className="App">
      <div
        id="drop-zone"
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById('file-input')?.click()}
      >
        <p>Drag & Drop your files here or click to upload</p>
        <input type="file" id="file-input" multiple onChange={handleFileSelect} />
      </div>
      <div id="file-list">
        {files.map((file) => (
          <div key={file.id} className="file-item">
            <img src={file.preview} alt={file.file.name} className="file-preview" />
            {/* <p>{file.file.name}</p> */}
            <button onClick={() => uploadFile(file.file)}>Upload</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
