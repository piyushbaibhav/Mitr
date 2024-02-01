import React, { useState } from 'react';

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
                { text: 'I am a simple chatbot.', type: 'bot' },
            ]);
        }, 500);

        // Clear input
        setInputText('');
    };

    const toggleChat = () => {
        setChatOpen((prevChatOpen) => !prevChatOpen);
    };

    return (
        <div className={`absolute bottom-4 right-4 z-50 transition-transform ${chatOpen ? 'transform translate-y-0' : 'transform translate-y-full'}`}>
            <div className="bg-green-500 text-white p-3 rounded-full cursor-pointer" onClick={toggleChat}>
                {chatOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className='w-10 h-6'>
                        <path d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className='w-10 h-6'>
                        <path d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z" />
                    </svg>
                )}
            </div>
            {chatOpen && (
                <div className="bg-white border rounded shadow p-4 mt-2 max-w-xs">
                    <div style={{ height: '200px', border: '1px solid #ccc', overflowY: 'auto' }}>
                        {messages.map((message, index) => (
                            <div key={index} className={message.type === 'user' ? 'text-blue-500' : 'text-green-500'}>
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
