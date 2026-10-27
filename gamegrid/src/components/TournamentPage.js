import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TournamentPage = () => {
    const { tournamentId } = useParams();
    const [bracket, setBracket] = useState(null);

    useEffect(() => {
        const fetchBracket = async () => {
            try {
                const response = await fetch(`http://your-backend-api.com/tournament/${tournamentId}`);
                const data = await response.json();
                setBracket(data);
            } catch (error) {
                console.error('Error fetching bracket:', error);
            }
        };

        fetchBracket();
    }, [tournamentId]);

    if (!bracket) {
        return <div>Loading tournament...</div>;
    }

    return (
        <div>
            <h1>{bracket.sport} Tournament</h1>
            <div>
                {bracket.matches.map((match, index) => (
                    <div key={index}>
                        <h3>Round {match.round}</h3>
                        <p>{match.team1} vs {match.team2}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TournamentPage;
