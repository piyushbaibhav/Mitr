import React, { useState } from 'react';
import { auth, firestore } from '../firebase/config';

const TicketForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert('Please fill in all fields');
            return;
        }

        const ticketData = {
            title,
            description,
            status: 'open', // You can set initial status as 'open'
            createdBy: auth.currentUser.uid,
            createdAt: new Date()
        };

        try {
            await firestore.collection('tickets').add(ticketData);
            alert('Ticket submitted successfully');
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error submitting ticket:', error);
            alert('Error submitting ticket');
        }
    };

    return (
        <div>
            <h2>Raise a Ticket</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Submit Ticket</button>
            </form>
        </div>
    );
};

export default TicketForm;
