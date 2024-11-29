import React, { useState } from 'react';
import './ContactUs.css';

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle subscription logic
        console.log('Subscribed with email:', email);
    };

    return (
        <div className="subscribe-container">
            <h1 className='h1'>Subscribe Us</h1>
            <form onSubmit={handleSubmit} className="subscribe-form">
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
        </div>
    );
};

export default Subscribe;
