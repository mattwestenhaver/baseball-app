import React from 'react';
import styles from '../styles/Home.module.css';

import HomePage from '../containers/home';

export default function Home() {
    return (
        <div className={styles.container}>
            <HomePage />
        </div>
    );
}
