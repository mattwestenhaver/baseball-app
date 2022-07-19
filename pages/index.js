import React from 'react';
import styles from '../styles/Home.module.css';

import HomePage from '../containers/home';

import { fetchMLBGames } from '../thunks/Api';

export default function Home({ games }) {
    return (
        <div className={styles.container}>
            <HomePage games={games} />
        </div>
    );
}

export async function getStaticProps() {
    const games = await fetchMLBGames();

    return {
        props: {
            games: games || null,
        },
    };
}
