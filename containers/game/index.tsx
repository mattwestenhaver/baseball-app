import React from 'react';
import styles from '../../styles/Game.module.css';
import Link from 'next/link';

import { GameData } from '../../types/games';

import { getTeamNames } from '../../utils/games';

type Props = {
    data: GameData;
};

const GameContainer: React.FC = ({ data }: Props) => {
    const { gameData, liveData } = data;

    const { awayName, homeName } = getTeamNames(gameData);

    const {
        linescore: {
            teams: {
                away: { runs: awayScore },
                home: { runs: homeScore },
            },
        },
    } = liveData;

    return (
        <div>
            <Link href="/">Home</Link>
            <div className={styles.gameContainer}>
                <div className={styles.scores}>
                    <div>{awayName}</div>
                    <div>{awayScore}</div>
                </div>
                <div className={styles.scores}>
                    <div>{homeName}</div>
                    <div>{homeScore}</div>
                </div>
            </div>
        </div>
    );
};

export default GameContainer;
