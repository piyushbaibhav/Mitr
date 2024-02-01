
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
        <button onClick={() => setDeleteMode(true)} className="bg-blue-500 text-white px-4 py-2 rounded mb-4 mt-4">
          Delete
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
