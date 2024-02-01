import React from 'react'
import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery';

export default function DocumentVerify() {
  return (
    <>
      <div className='ml-10 mt-10 mr-10'>
        <nav className=' m-5 p-4 shadow-2xl rounded-xl'>
        <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
          <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              Contract  <span class="hidden sm:inline-flex sm:ms-2">Acceptance</span>
            </span>
          </li>
          <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span class="flex text-green-500 items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <span class="me-2">2.</span>
              Document <span class="hidden sm:inline-flex sm:ms-2">Verification</span>
            </span>
              </li>
              <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
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
      <div className='m-14 shadow-2xl rounded-2xl p-5 '>
        <div class="grid grid-rows-4 gap-4 grid-flow-col ">
          <div>     
            <p className='text-lg font-bold'>10th Marksheet</p>
            <Gallery/></div>
          <div>
            <p className='text-lg font-bold'>12th Marksheet</p>
            <Gallery/></div>
          <div>
            <p className='text-lg font-bold'>Graduation Certification</p>
          <Gallery/></div>
          <div>
            <p className='text-lg font-bold'>Aadhar Card</p>
          <Gallery/></div>
          <div>
            <p className='text-lg font-bold'>Recent Pay Slip</p>
          <Gallery/></div>
          <div>
            <p className='text-lg font-bold'>Address Proof</p>
          <Gallery/></div>
          <div>
            <p className='text-lg font-bold'>Criminal Record Attested</p>
          <Gallery/></div>
          <div>
            <p className='text-lg font-bold'>Form 16</p>
          <Gallery/></div> 
        </div>
            <Link to="/dashboard">
              <button type="button" class="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">← Go Back</button>
            </Link>
          <Link to="/photoupload">
            <button type="button" className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Proceed →</button>
          </Link>
      </div>     


    </>
  )
}
