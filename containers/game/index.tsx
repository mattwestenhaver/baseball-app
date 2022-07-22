import React from 'react';
import mainStyles from '../../styles/Home.module.css';
import styles from '../../styles/Game.module.css';
import Link from 'next/link';

import GamePageHeader from './components/header';
import type { SpecificGameData } from '../../types/game';

import {
    getTeamNames,
    getGameInningString,
    getCurrentCountDisplay,
} from '../../utils/games';

type Props = {
    data: SpecificGameData;
};

const GameContainer: React.FC<Props> = ({ data }) => {
    const {
        liveData: {
            plays: {
                currentPlay: { matchup },
            },
        },
    } = data;

    return (
        <div>
            <Link href="/">
                <span className={mainStyles.link}>Home</span>
            </Link>
            <GamePageHeader data={data} />
            <div className={styles.container}>
                <div>At Bat: {matchup?.batter.fullName}</div>
                <div>Pitching: {matchup?.pitcher.fullName}</div>
            </div>
        </div>
    );
};

export default GameContainer;
