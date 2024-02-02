import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../components/Hamburger'

export default function ITasset() {
    return (
    <>
    <div>
    <Hamburger/>
    <div>
        <div class="w-full md:w-96 md:max-w-full mx-auto">
            <div class="p-6 border border-gray-300 sm:rounded-md">
                <form
                method="POST"
                action="https://herotofu.com/start"
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
                        mt-1
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                    "
                    placeholder="Joe Bloggs"
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
                    />
                </label>
                <div class="mb-6">
                    <div class="mt-2">
                    <div>
                        <label class="inline-flex items-center">
                        <input
                            name="remote"
                            value=""
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
                        <span class="ml-2">You'd like to work remotely</span>
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center">
                        <input
                            name="re"
                            value=""
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
                        <span class="ml-2">You'd prefer to work onsite</span>
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center">
                        <input
                            name="re"
                            value=""
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
                        <span class="ml-2">You'd prefer to work onsite</span>
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center">
                        <input
                            name="re"
                            value=""
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
                        <span class="ml-2">You'd prefer to work onsite</span>
                        </label>
                    </div>
                    </div>
                </div>
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
                    Apply
                    </button>
                </div>
                </form>
            </div>
            </div>

    </div>
    </div>    
    </>
    )
}