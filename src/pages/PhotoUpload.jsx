import React, { useState } from 'react'
import Gallery from '../components/Gallery'
import { Link } from 'react-router-dom'
import Webcam from "react-webcam";
import Chatbot from '../components/Chatbot';

const WebcamComponent = () => {
  const [openWebcam, setOpenWebcam] = useState(false);
  const [screenshot, setScreenshot] = useState(null);

  const webcamRef = React.useRef(null);

  const handleOpenWebcam = () => {
    setOpenWebcam(true);
  };

  const handleCloseWebcam = () => {
    setOpenWebcam(false);
    setScreenshot(null);
  };

  const captureScreenshot = () => {
    const imageSrc = webcamRef.current.getScreenshot();

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      const maxWidth = 300;
      const maxHeight = 300;

      let width = image.width;
      let height = image.height;

      if (width > maxWidth) {
        height *= maxWidth / width;
        width = maxWidth;
      }

      if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(image, 0, 0, width, height);

      const resizedImageSrc = canvas.toDataURL('image/jpeg', 0.5); // Set the desired image quality (0.5 = 50%)
      setScreenshot(resizedImageSrc);
    };
  };

  const removeScreenshot = () => {
    setScreenshot(null);
  };

  return (
    <>
      {openWebcam ? (
        <>
          <Webcam ref={webcamRef} />
          <button
            type="button"
            className="text-white mt-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            onClick={captureScreenshot}
          >
            Take Screenshot
          </button>
          {screenshot && (
            <button
              type="button"
              className="text-white mt-2 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
              onClick={removeScreenshot}
            >
              Remove Screenshot
            </button>
          )}
        </>
      ) : (
        <button
          type="button"
          className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleOpenWebcam}
        >
          Use Webcam
        </button>
      )}
      {openWebcam && (
        <button
          type="button"
          className="text-white mt-2 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
          onClick={handleCloseWebcam}
        >
          Close Webcam
        </button>
      )}
      {screenshot && (
        <div>
          <img src={screenshot} alt="Screenshot" />
          {/* Add code to upload the screenshot as a file */}
        </div>
      )}
    </>
  );
};

export default function PhotoUpload() {
  return (
    <>
      <div className='ml-10 mt-10 mr-10'>
        <nav className='m-5 p-4 shadow-2xl rounded-xl'>
          <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Contract  <span class="hidden sm:inline-flex sm:ms-2">Acceptance</span>
              </span>
            </li>
            <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Document  <span class="hidden sm:inline-flex sm:ms-2">Verification</span>
              </span>
            </li>

            <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span class="flex text-green-500 items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                <span class="me-2">3.</span>
                Photo <span class="hidden sm:inline-flex sm:ms-2">Upload</span>
              </span>
            </li>
            <li class="flex items-center">
              <span class="me-2">4.</span>
              Job <span class="hidden sm:inline-flex sm:ms-2"> Responsibilites</span>
            </li>
          </ol>
        </nav>
      </div>
      <div className="justify-center items-center m-14">
        <div className="bg-white shadow-2xl rounded-2xl p-5">
          <div className='m-5'>
            <div className='text-2xl font-bold'>PhotoUpload</div>
            <div className='mt-5 w-full leading-relaxed'>
              <p>Please upload your photo in white background below : </p>
            </div>
            <div className='ml-5'>
              <Gallery />
              <WebcamComponent />
            </div>
            <Link to="/documentverify">
              <button type="button" class="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">← Go Back</button>
            </Link>
            <Link to="/term">
              <button type="button" class="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Proceed →</button>
            </Link>
          </div>
        </div>
      </div>
      <Chatbot />
    </>
  )
}
