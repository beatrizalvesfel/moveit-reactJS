import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeade() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Não completei
            </button>

            <button 
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeade}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio!</strong>
        <div>
        <img src="icons/level-up.svg" alt="Level Up" />
          <p>
            Avance de nivel completando desafios!
          </p>
        </div>
      </div>
      )}
    </div>
  );
}
