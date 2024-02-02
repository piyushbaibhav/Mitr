import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [chatOpen, setChatOpen] = useState(false);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim() === '') return;

        // Add user message
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: inputText, type: 'user' },
        ]);

        // Simulate bot response (you can replace this with actual logic)
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    text: 'Hi! How can I help you? Here are the most common FAQs',
                    type: 'bot'
                },
                {
                    text: 'FAQ 1 text goes here. [General]',
                    type: 'faq',
                    url: '/faq1'
                },
                {
                    text: 'FAQ 2 text goes here. [Technical]',
                    type: 'faq',
                    url: '/faq2'
                },
            ]);
        }, 500);

        // Clear input
        setInputText('');
    };

    const toggleChat = () => {
        setChatOpen((prevChatOpen) => !prevChatOpen);
    };

    return (
        <div className={`fixed bottom-4 right-4 z-50 transition-transform ${chatOpen ? 'transform translate-y-0' : 'transform translate-y-0'}`}>
            {/* ... (unchanged part of your component) */}
            {chatOpen && (
                <div className="bg-white border rounded shadow p-4 mt-2 max-w-xs">
                    <div style={{ height: '200px', border: '1px solid #ccc', overflowY: 'auto' }}>
                        {messages.map((message, index) => (
                            <div key={index} className={message.type === 'user' ? 'text-red-500 grid justify-items-end' : 'text-blue-400 '}>
                                {/* Check if it's an FAQ message with a URL */}
                                {message.type === 'faq' && message.url ? (
                                    <Link to='/'>{message.text}</Link>
                                ) : (
                                    // Render regular message if not an FAQ with a URL
                                    message.text
                                )}
                            </div>
                        ))}
                    </div>
                    {/* ... (unchanged part of your component) */}
                </div>
            )}
        </div>
    );
};

export default Chatbot;
