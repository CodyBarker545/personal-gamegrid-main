import React from 'react';
import { Link } from 'react-router-dom'; 
import './MainScreen.css';

const sportsTopRow = [
    { name: 'Football', image: '/images/football.jpg', details: 'Football is a popular sport played worldwide.' },
    { name: 'Basketball', image: '/images/basketball.jpg', details: 'Basketball is played by two teams of five players.' },
    { name: 'Soccer', image: '/images/soccer.jpg', details: 'Soccer is the most popular sport globally.' },
    { name: 'Dodgeball', image: '/images/dodgeball.jpg', details: 'Dodgeball is a team sport where players try to hit opponents with a ball.' },
];

const sportsBottomRow = [
    { name: 'Volleyball', image: '/images/volleyball.jpg', details: 'Volleyball is a team sport in which two teams are separated by a net.' },
    { name: 'Golf', image: '/images/golf.jpg', details: 'Golf is a sport where players use clubs to hit a ball into a series of holes.' },
    { name: 'Softball', image: '/images/softball.jpg', details: 'Softball is a team sport similar to baseball, with a larger ball and a smaller field.' },
];

const MainScreen = () => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="main-container">
            <h1>Welcome to GameGrid</h1>

            {/* Top Row with 4 sports */}
            <div className="card-container">
                {sportsTopRow.map((sport, index) => (
                    <div className="card" key={index}>
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={sport.image} alt={sport.name} />
                                <h2>{capitalizeFirstLetter(sport.name)}</h2> {/* Capitalize the first letter */}
                            </div>
                            <div className="card-back">
                                <p>{sport.details}</p>
                                {/* Wrap in Link to navigate to the registration form for the selected sport */}
                                <Link to={`/register/${sport.name.toLowerCase()}`} className="select-button">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Row with 3 sports */}
            <div className="card-container-bottom">
                {sportsBottomRow.map((sport, index) => (
                    <div className="card" key={index}>
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={sport.image} alt={sport.name} />
                                <h2>{capitalizeFirstLetter(sport.name)}</h2> {/* Capitalize the first letter */}
                            </div>
                            <div className="card-back">
                                <p>{sport.details}</p>
                                {/* Wrap in Link to navigate to the registration form for the selected sport */}
                                <Link to={`/register/${sport.name.toLowerCase()}`} className="select-button">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainScreen;
