import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const { sportName } = useParams(); // Get the sport from the URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://your-backend-api.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, sport: sportName }),
            });

            if (response.ok) {
                const data = await response.json();
                alert(`You have been added to Team ${data.teamName}!`);
                navigate(`/tournament/${data.tournamentId}`);
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="registration-container">
            <h1>Register for {sportName} Tournament</h1>
            <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
