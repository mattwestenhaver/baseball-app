import React from 'react';
import styles from '../../styles/Game.module.css';
import mainStyles from '../../styles/Home.module.css';
import Link from 'next/link';

import type { SpecificGameData } from '../../types/game';

import {
    getTeamNames,
    getGameInningString,
    getCurrentCountDisplay,
} from '../../utils/games';

type Props = {
    data: SpecificGameData;
};

const GameContainer: React.FC = ({ data }: Props) => {
    const { gameData, liveData } = data;
    const {
        status: { abstractGameState },
    } = gameData;

    const { awayName, homeName } = getTeamNames(gameData);
    const gameState = getGameInningString(liveData);

    const {
        linescore: {
            teams: {
                away: { runs: awayScore },
                home: { runs: homeScore },
            },
        },
        plays: {
            currentPlay: { count },
        },
    } = liveData;

    const currentCount = getCurrentCountDisplay(count);

    return (
        <div>
            <Link href="/">
                <span className={mainStyles.link}>Home</span>
            </Link>
            <div className={styles.gameContainer}>
                <div style={{ textAlign: 'center' }}>
                    {abstractGameState === 'Final' ? 'Final' : gameState}
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
                {abstractGameState === 'Live' && (
                    <div style={{ textAlign: 'center' }}>{currentCount}</div>
                )}
            </div>
        </div>
    );
};

export default GameContainer;
