import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../components/Hamburger'

export default function ITasset() {
    return (
    <>
    {/* <img src='./back.svg' className='-z-10'/> */}
    <div className='flex'>
    <Hamburger/> <div className='mx-auto mt-24 h-1/2 border bg-blue-100 shadow-2xl rounded-2xl p-5'><span className='ml-24 font-extrabold'>Hardware Request Form</span>
        <div class="w-full mt-4 bg-blue md:w-96 md:max-w-full mx-auto">
        <div class="p-6 border border-gray-300 sm:rounded-md">
            <form
            method="POST"
            action=""
            enctype="multipart/form-data"
            >
            <label class="block mb-6">
                <span class="text-gray-700">Your name</span>
                <input
                required
                name="name"
                type="text"
                class="
                    block
                    w-full
                    mt-1 p-1
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                "
                placeholder="Name"
                />
            </label>
            <label class="block mb-6">
                <span class="text-gray-700">Email address</span>
                <input
                required
                name="email"
                type="email"
                class="
                    block 
                    w-full
                    mt-1 p-1
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                "
                placeholder="email@gmail.com"
                />
            </label>
                <span class="text-gray-700">Required Hardware: </span>
                <div>
                    <label class="inline-flex items-center">
                    <input
                        name="re"
                        value="no"
                        type="checkbox"
                        class="
                        text-indigo-600
                        border-gray-300
                        rounded-full
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                        "
                    />
                    <span class="ml-2">Laptop</span>
                    </label>
                </div>
                <div>
                    <label class="inline-flex items-center">
                    <input
                        name="re"
                        value="no"
                        type="checkbox"
                        class="
                        text-indigo-600
                        border-gray-300
                        rounded-full
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                        "
                    />
                    <span class="ml-2">KeyBoard</span>
                    </label>
                </div>
                <div>
                    <label class="inline-flex items-center">
                    <input
                        name="re"
                        value="no"
                        type="checkbox"
                        class="
                        text-indigo-600
                        border-gray-300
                        rounded-full
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                        "
                    />
                    <span class="ml-2">Mouse</span>
                    </label>
                </div>
            <div class="mb-6 mt-6">
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
                Submit
                </button>
            </div>
            </form>
    </div></div></div></div>
    </>
    )
}