
import React, { useState } from 'react';
import Image from './Image';
import FileUpload from './FileUpload';

const Gallery = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [deleteMode, setDeleteMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileUpload = (files) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length === 0) {
      setErrorMessage('Please select valid image files.');
      return;
    }

    const newImages = imageFiles.map((file) => ({
      id: Math.random().toString(36).substring(7),
      src: URL.createObjectURL(file),
      alt: file.name,
    }));

    setUploadedImages([...uploadedImages, ...newImages]);
    setErrorMessage('');
  };

  const handleDeleteSelected = () => {
    const updatedImages = uploadedImages.filter((image) => !selectedImages.includes(image.id));
    setUploadedImages(updatedImages);
    setSelectedImages([]);
    setDeleteMode(false);
  };

  const handleImageClick = (image) => {
    if (deleteMode) {
      toggleImageSelection(image.id);
    }
  };

  const toggleImageSelection = (imageId) => {
    setSelectedImages((prevSelectedImages) => {
      if (prevSelectedImages.includes(imageId)) {
        return prevSelectedImages.filter((id) => id !== imageId);
      } else {
        return [...prevSelectedImages, imageId];
      }
    });
  };

  const handleCheckboxChange = (imageId) => {
    toggleImageSelection(imageId);
  };

  const handleSelectAll = () => {
    setSelectedImages(uploadedImages.map((image) => image.id));
  };

  const handleDeselectAll = () => {
    setSelectedImages([]);
  };

  return (
    <div className="container p-4  rounded-md w-1/2">
      

      <FileUpload onFileUpload={handleFileUpload} className="w-full mb-4" />

      {errorMessage && (
        <div className="bg-red-600 text-white px-4 py-2 rounded mb-4">
          {errorMessage}
        </div>
      )}

      {/* Delete Buttons */}
      {deleteMode ? (
        <div className="mb-4 flex flex-col sm:flex-row">
          <button
            onClick={handleDeleteSelected}
            className="bg-red-600 text-white px-4 py-2 rounded mb-2 sm:mb-0 sm:mr-4 mt-4"
          >
            Delete Selected
          </button>
          <button onClick={() => setDeleteMode(false)} className="bg-gray-900 text-white px-4 py-2 rounded mt-4">
            Cancel
          </button>
          <button onClick={handleSelectAll} className="bg-green-500 text-white px-4 py-2 rounded ml-2 mt-4">
            Select All
          </button>
        </div>
      ) : (
        <button onClick={() => setDeleteMode(true)} className="bg-red-500 px-4 py-2 rounded mb-4 mt-4">
          <svg class=" sm:h-4 "  aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
          </svg>
        </button>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {uploadedImages.map((image) => (
          <div key={image.id} className="relative group" onClick={() => handleImageClick(image)}>
            <Image src={image.src} alt={image.alt} className="w-full" />
            {deleteMode && (
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(image.id)}
                checked={selectedImages.includes(image.id)}
                className="absolute top-2 left-2"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
