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

        
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: inputText, type: 'user' },
        ]);

        
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    text: (
                        <span>
                            Hi! How can I help you? Here are the most common{' '}
                            <Link to="/faqs">
                                <p className='underline font-semibold'>FAQs.</p>
                            </Link>
                        </span>
                    ),
                    type: 'bot'
                },
            ]);
        }, 500);

        
        setInputText('');
    };

    const toggleChat = () => {
        setChatOpen((prevChatOpen) => !prevChatOpen);
    };

    return (
        <div className={`fixed bottom-4 right-4 z-50 transition-transform ${chatOpen ? 'transform translate-y-0' : 'transform translate-y-0'}`}>
            <div className="bg-blue-400 text-white p-3 rounded-full cursor-pointer" onClick={toggleChat}>
                {chatOpen ? (
                    <div className='grid justify-items-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className='w-10 h-6 items-center'>
                            <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                        </svg>
                    </div>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className='w-10 h-6 '>
                        <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                    </svg>
                )}
            </div>
            {chatOpen && (
                <div className="bg-white border rounded shadow p-4 mt-2 max-w-xs">
                    <div style={{ height: '200px', border: '1px solid #ccc', overflowY: 'auto' }}>
                        {messages.map((message, index) => (
                            <div key={index} className={message.type === 'user' ? 'text-md text-sky-800 grid justify-items-end' : 'text-md text-blue-400 '}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center mt-2">
                        <input
                            type="text"
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                            className="border rounded py-1 px-2 flex-grow"
                        />
                        <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
