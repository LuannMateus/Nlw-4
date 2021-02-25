import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengeContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const {  level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/LuannMateus.png" alt="Luan Mateus"/>
            <div>
                <strong>Luan Mateus</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}