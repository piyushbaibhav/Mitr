import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../components/Hamburger'

export default function ITasset() {
    return (
    <>  
    <div className="flex">
        <Hamburger/>
        <div className=" my-auto mx-auto">
            <div className="bg-white shadow-2xl rounded-2xl ">
                <div class="w-full md:w-96 md:max-w-full mx-auto ">
                <div class="p-6 border border-gray-300 sm:rounded-md">
                    <form method="POST" action="">
                    <label class="block mb-6">
                        <span class="text-gray-700">Email address</span>
                        <input
                        name="email"
                        type="email"
                        class="
                            block
                            w-full
                            mt-1
                            border-gray-300
                            rounded-md
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                        "
                        placeholder="joe.bloggs@example.com"
                        required
                        />

                <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</h3>
                <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="vue-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vue JS</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="react-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">React</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="angular-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Angular</label>
                        </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="laravel-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laravel</label>
                        </div>
                    </li>
                </ul>

                    </label>
                    <div class="mb-6">
                        <button
                        type="submit"
                        class="
                            h-10
                            px-5
                            text-indigo-100
                            bg-indigo-700
                            rounded-lg
                            transition-colors
                            duration-150
                            focus:shadow-outline
                            hover:bg-indigo-800
                        "
                        >
                        Request Access
                        </button>
                    </div>
                    <div>
                
                    </div>
                    </form>
                </div>
                </div>

            </div>
        
        
        
        </div>      
    </div>
    </>   
    )
}