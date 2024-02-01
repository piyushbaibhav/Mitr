import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isNdaChecked, setIsNdaChecked] = useState(false);

  const handleTermsCheckboxChange = () => {
    setIsTermsChecked(!isTermsChecked);
  };

  const handleNdaCheckboxChange = () => {
    setIsNdaChecked(!isNdaChecked);
  };

  const isProceedButtonDisabled = !isTermsChecked || !isNdaChecked;

  return (
    <>
    <nav className='m-5'>
        <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
          <li class="flex md:w-full items-center text-green-500 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <span class="me-2">1</span>
              Contract  <span class="hidden sm:inline-flex sm:ms-2">Acceptance</span>
            </span>
          </li>
          <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <span class="me-2">2</span>
              Document <span class="hidden sm:inline-flex sm:ms-2">Verification</span>
            </span>
          </li>
          <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <span class="me-2">3</span>
              Photo <span class="hidden sm:inline-flex sm:ms-2">Upload</span>
            </span>
          </li>
          <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <span class="me-2">4</span>
              Terms <span class="hidden sm:inline-flex sm:ms-2"> & </span> <span class="hidden sm:inline-flex sm:ms-2"> Conditions</span>
            </span>
          </li>

        </ol>
    </nav>
      <div className='m-5'>
        <p className='text-2xl font-bold'>Contract</p>
        <div className='w-4/5 '>
          <p>I hereby acknowledge and confirm the acceptance of the terms and conditions outlined in the mentioned contract.<br/>

                By signing below, I affirm that I have thoroughly reviewed the contract and agree to comply with all the specified terms, obligations, and responsibilities outlined therein.
          </p>
          <div className="flex items-center">
            <input
              id="terms-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={isTermsChecked}
              onChange={handleTermsCheckboxChange}
            />
            <label
              htmlFor="terms-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{' '}
              <a href="https://cdn1.vox-cdn.com/uploads/chorus_asset/file/3543196/AmazonContract.0.pdf" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline">
                terms and conditions
              </a>
              .
            </label>
          </div>
          <p>
            The obligations of the Receiving Party under this Agreement shall continue for a period of [specify the duration] from the date of disclosure of each portion of Confidential Information.
          </p>
          <div className="flex items-center">
            <input
              id="nda-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={isNdaChecked}
              onChange={handleNdaCheckboxChange}
            />
            <label
              htmlFor="nda-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{' '}
              <a href="https://s3.us-east-2.amazonaws.com/myhrcounsel2/On-boarding/Forms/Employee+Confidentiality+and+Non-Disclosure+Agreement.pdf" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline">
                NDA contract
              </a>
              .
            </label>
          </div>
        </div>
        <Link to="/documentverify">
          <button
            type="button"
            className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            disabled={isProceedButtonDisabled}
          >
            Proceed
          </button>
        </Link>
      </div>
    </>
  )
}
