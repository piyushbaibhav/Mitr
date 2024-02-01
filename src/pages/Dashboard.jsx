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
<div className='ml-10 mt-10 mr-10 '>
          <nav className='m-5 p-4 shadow-2xl rounded-xl'>
            <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              <li class="flex md:w-full items-center text-green-500 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span class="me-2">1.</span>
                  Contract  <span class="hidden sm:inline-flex sm:ms-2">Acceptance</span>
                </span>
              </li>
              <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
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
    <div className="flex justify-center items-center m-14">
      <div className="bg-white shadow-2xl rounded-2xl p-5">
        
        <div className='m-5'>
          <p className='text-2xl font-bold'>Agreement & Contract</p>
          <div className='mt-5 w-full leading-relaxed'>
            <p>I hereby acknowledge and accept the terms and conditions outlined in the employee onboarding agreement with Amazon.
            By signing this agreement, I affirm that I have reviewed and understand the policies, procedures, and expectations set forth by Amazon.com regarding my employment.
            </p>
            <div className="mt-2 flex items-center">
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
                  Terms and Conditions
                </a>
                .
              </label>
            </div>
            <p className='mt-5 leading-relaxed'>
            I agree to adhere to the company's code of conduct, confidentiality agreements, and any other relevant policies governing my conduct during my employment tenure.
            </p><p>
            I understand that my employment with Amazon is at-will, and either party may terminate the employment relationship at any time, with or without cause or notice.
            </p>
            <div className="flex mt-2 mb-6 items-center">
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
                  NDA Contract
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
              Proceed→  
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
  )
}
