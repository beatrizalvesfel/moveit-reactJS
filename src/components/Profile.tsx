import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile(){
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/beatrizalvesfel.png" alt="Beatriz Alves"/>
      <div>
        <strong>Beatriz Alves</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Nível {level}
          </p>
      </div>
    </div>
  );
}

