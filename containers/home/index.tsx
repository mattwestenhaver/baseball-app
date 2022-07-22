import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

// types
import type { Games, GamesArray } from '../../types/all-games';

type Props = {
    games: Games;
};

const HomepageContainer: React.FC = ({ games }: Props) => {
    const [formattedGames, setFormattedGames] = useState<GamesArray>([]);

    useEffect(() => {
        const today = getTodaysDate();
        const retVal = games?.dates?.find((date) => date.date === today);

        setFormattedGames(retVal?.games);
    }, [games]);

    return (
        <div>
            {!!formattedGames?.length ? (
                formattedGames.map((game) => {
                    const {
                        gamePk,
                        teams,
                        status: { abstractGameState },
                    } = game;

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
                                <div className={styles.link}>
                                    {awayName} vs. {homeName}
                                </div>
                            </Link>
                            <div style={{ cursor: 'default' }}>
                                {abstractGameState}: {awayScore} - {homeScore}
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>No Available Games</div>
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
