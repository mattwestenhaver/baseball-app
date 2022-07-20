import React from 'react';
import styles from '../../styles/Game.module.css';

import { GameData } from '../../types/games';

type Props = {
    data: GameData;
};

const GameContainer: React.FC = ({ data }: Props) => {
    const { gameData, liveData } = data;

    const {
        teams: {
            away: { shortName: awayName },
            home: { shortName: homeName },
        },
    } = gameData;

    const {
        linescore: {
            teams: {
                away: { runs: awayScore },
                home: { runs: homeScore },
            },
        },
    } = liveData;

    return (
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
    );
};

export default GameContainer;
