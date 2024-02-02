import React from 'react';
import Hamburger from '../components/Hamburger';
import { getFirestore, doc, setDoc, Timestamp } from "firebase/firestore";
import { app } from '../firebase/config'; // Assuming you have a firebaseConfig.js file where Firebase is initialized

const db = getFirestore(app);

export default function ITasset() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Extract form data
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            hardware: {
                laptop: e.target.laptop.checked,
                keyboard: e.target.keyboard.checked,
                mouse: e.target.mouse.checked
            }
        };

        try {
            // Save form data to Firestore
            await setDoc(doc(db, "requests", "newRequest"), {
                ...formData,
                timestamp: Timestamp.fromDate(new Date())
            });

            // Optionally, you can clear the form fields or show a success message
            console.log('Form data submitted successfully:', formData);
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <>
            <div className='flex'>
                <Hamburger/>
                <div className='mx-auto mt-24 h-1/2 border bg-blue-100 shadow-2xl rounded-2xl p-5'>
                    <span className='ml-24 font-extrabold'>Hardware Request Form</span>
                    <div className="w-full mt-4 bg-blue md:w-96 md:max-w-full mx-auto">
                        <div className="p-6 border border-gray-300 sm:rounded-md">
                            <form onSubmit={handleSubmit}>
                                <label className="block mb-6">
                                    <span className="text-gray-700">Your name</span>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        className="
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
                                <label className="block mb-6">
                                    <span className="text-gray-700">Email address</span>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        className="
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
                                <span className="text-gray-700">Required Hardware: </span>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            name="laptop"
                                            type="checkbox"
                                            className="text-indigo-600 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                        <span className="ml-2">Laptop</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            name="keyboard"
                                            type="checkbox"
                                            className="text-indigo-600 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                        <span className="ml-2">Keyboard</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            name="mouse"
                                            type="checkbox"
                                            className="text-indigo-600 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                        <span className="ml-2">Mouse</span>
                                    </label>
                                </div>
                                <div className="mb-6 mt-6">
                                    <button
                                        type="submit"
                                        className="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
