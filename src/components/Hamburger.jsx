import React, { useState } from 'react';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center">
            <button
                className="text-gray-500 focus:outline-none lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 6l12 12"
                            />
                        </>
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>
        </div>
    );
};

export default Hamburger;
