import React, { useEffect } from 'react';
import Typed from "typed.js";

const TypingText = () => {
    useEffect(() => {
        const typed = new Typed(".typing-text", {
            strings: ["Mitr", "मित्र", "বন্ধু", "મિત્રો" ],
            loop: true,
            typeSpeed: 70,
            showCursor: false, 
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="typing-text text-3xl dark:text-red-500 flex flex-row"></div>
    );
};

export default TypingText;
