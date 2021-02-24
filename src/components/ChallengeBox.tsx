import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>
              Caminhe por 3 minutos e estique 
              suas pernas pra você ficar saudável.
            </p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
            >
              Não completei
            </button>

            <button 
              type="button"
              className={styles.challengeSucceededButton}
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
