import React from 'react'
import { Link } from 'react-router-dom'
import Chatbot from '../components/Chatbot'

export default function Terms() {
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
            <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Photo <span class="hidden sm:inline-flex sm:ms-2">Upload</span>
              </span>
            </li>

            <li class="flex text-green-500 items-center">
              <span class="me-2">4.</span>
              Job <span class="hidden sm:inline-flex sm:ms-2"> Responsibilites</span>

            </li>
          </ol>
        </nav>
      </div>
      <div className="justify-center items-center m-14">
        <div className='bg-white shadow-2xl rounded-2xl p-5'>
          <div className='m-5 leading-relaxed'>
            <p className='text-2xl font-bold'>Graphic Designer</p>
            <p className='mt-2 leading-relaxed'><strong>Job description:</strong></p>
            <p className='space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-justify w-11/12'>The graphic designer works with the rest of the creative team to develop advertising materials for our clients. They use Adobe software to design deliverables such as logos, brochures, print and digital advertisements, magazines and e-books. This individual should have a deep passion for design and always be looking for the latest graphic design trends and techniques.</p>
            <p><strong>Job responsibilities:</strong></p>
            <ul class=" space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>
                Create a wide variety of deliverables using Adobe Creative Cloud
              </li>
              <li>
                Work with the creative team to brainstorm innovative advertising campaigns
              </li>
              <li>
                Resize images using Adobe Photoshop
              </li>
              <li>
                Complete minor HTML/CSS coding as needed
              </li>
              <li>
                Research emerging design trends
              </li>
              <li>
                Attend an annual graphic design conference
              </li>
            </ul>
            <p><strong>Requirements:</strong></p>
            <ul class=" space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>
                Bachelor’s degree in graphic design
              </li>
              <li>
                Knowledge of Adobe Creative Cloud
              </li>
              <li>
                Proficient in HTML/CSS
              </li>
              <li>
                Natural artistic ability and eye for design
              </li>
              <li>
                Three to five years of graphic design experience
              </li>
              <li>
                Ability to work in an office setting all day
              </li>
            </ul>
            <p><strong>Reports to: </strong></p>
            <p className='space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-justify'>Director of Sales. Monthly meetings will be held to make sure the customer service and sales manager is achieving company objectives.</p>
            <div className="flex mt-4 mb-6 items-center">
              <input
                id="nda-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="nda-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{' '}
                <span className="text-blue-600 dark:text-blue-500 hover:underline">
                  Terms
                </span>
                .
              </label>
            </div>
            <Link to="/photoupload">
              <button type="button" class="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">← Go Back</button>
            </Link>
            <Link to="/portal">
              <button type="button" class="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Proceed →</button>
            </Link>
          </div>
        </div>
      </div>
      <Chatbot />
    </>
  )
}
