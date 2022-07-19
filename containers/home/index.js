import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HomepageContainer = ({ games }) => {
    const [formattedGames, setFormattedGames] = useState([]);

    useEffect(() => {
        const today = getTodaysDate();
        const data = games?.dates?.find((date) => date.date === today);

        setFormattedGames(data?.games);
    }, [games]);

    return (
        <div>
            {formattedGames.map((game) => {
                const { gamePk, seriesDescription, teams } = game;
                const awayScore = teams.away.score;
                const homeScore = teams.home.score;

                return (
                    <div key={gamePk}>
                        <Link href={`/games/${gamePk}`}>
                            {seriesDescription}
                        </Link>
                        <div>
                            {awayScore} - {homeScore}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const getTodaysDate = () => {
    const date = new Date();

    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
};

const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
};

export default HomepageContainer;
