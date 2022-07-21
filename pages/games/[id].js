import React from 'react';
import styles from '../../styles/Home.module.css';

import GameContainer from '../../containers/game';

import { fetchMLBGameById } from '../../thunks/Api';

const GamePage = ({ data }) => {
    return (
        <div className={styles.container}>
            <GameContainer data={data} />
        </div>
    );
};

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    const game = await fetchMLBGameById(params.id);

    return {
        props: {
            data: game || null,
        },
    };
}

export default GamePage;
