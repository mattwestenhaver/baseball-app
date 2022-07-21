import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// types
import { Games } from '../../types/games';

// utils
import { getTeamNames } from '../../utils/games';

type Props = {
    games: Games;
};

const HomepageContainer: React.FC = ({ games }: Props) => {
    const [formattedGames, setFormattedGames] = useState([]);

    useEffect(() => {
        const today = getTodaysDate();
        const data = games?.dates?.find((date) => date.date === today);

        setFormattedGames(data?.games);
    }, [games]);

    return (
        <div>
            {!!formattedGames?.length ? (
                formattedGames.map((game) => {
                    const { gamePk, teams } = game;
                    const {
                        score: awayScore,
                        team: { name: awayName },
                    } = teams.away;
                    const {
                        score: homeScore,
                        team: { name: homeName },
                    } = teams.home;

                    return (
                        <div key={gamePk} style={{ marginBottom: '6px' }}>
                            <Link href={`/games/${gamePk}`}>
                                <div style={{ cursor: 'pointer' }}>
                                    {awayName} vs. {homeName}
                                </div>
                            </Link>
                            <div style={{ cursor: 'default' }}>
                                {awayScore} - {homeScore}
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>No Games</div>
            )}
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
