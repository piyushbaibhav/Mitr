import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import StoreImageText from '../firebase/StoreImageText';

const FileUpload = ({ onFileUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      onFileUpload(acceptedFiles);
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded p-4 text-center cursor-pointer"
    >
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
    <StoreImageText/>
    </div>
  );
};

export default FileUpload;