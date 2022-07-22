import React from 'react';
import styles from '../../../styles/Game.module.css';

// types
import type { SpecificGameData } from '../../../types/game';

// utils
import {
    getTeamNames,
    getGameInningString,
    getCurrentCountDisplay,
    isGameFinished,
} from '../../../utils/games';

type Props = {
    data: SpecificGameData;
};

const GamePageHeader: React.FC<Props> = ({ data }) => {
    const { gameData, liveData } = data;
    const {
        status: { abstractGameState },
    } = gameData;

    const {
        linescore: {
            teams: {
                away: { runs: awayScore },
                home: { runs: homeScore },
            },
        },
    } = liveData;

    const { awayName, homeName } = getTeamNames(gameData);
    const gameState = getGameInningString(liveData);
    const currentCount = getCurrentCountDisplay(liveData);
    const gameFinished = isGameFinished(gameData);

    return (
        <div className={styles.container}>
            <div style={{ textAlign: 'center' }}>
                {gameFinished ? 'Final' : gameState}
            </div>
            <div className={styles.scoreContainer}>
                <div className={styles.leftScore}>
                    {awayName} {awayScore}
                </div>
                <div>-</div>
                <div className={styles.rightScore}>
                    {homeScore} {homeName}
                </div>
            </div>
            {!gameFinished && (
                <div style={{ textAlign: 'center' }}>{currentCount}</div>
            )}
        </div>
    );
};

export default GamePageHeader;
