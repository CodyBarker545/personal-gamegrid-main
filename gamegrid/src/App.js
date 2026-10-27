import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage'; // Check this import
import MainScreen from './components/Mainscreen'; // Check this import
import RegistrationForm from './components/RegistrationForm'; // Check this import

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (email, password) => {
        const validEmail = "test@example.com";
        const validPassword = "password123";

        if (email === validEmail && password === validPassword) {
            setIsLoggedIn(true);
        } else {
            alert("Invalid email or password.");
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={isLoggedIn ? <MainScreen /> : <LoginPage onLogin={handleLogin} />} />
                <Route path="/register/:sportName" element={<RegistrationForm />} />
            </Routes>
        </Router>
    );
}

export default App;







