import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number; 
  challengesComppleted: number; 
  expienceToNextLevel: number;
  curentExperience: number;
  activeChallenge: Challenge; 
  startNewChallenge: () => void;
  levelUp: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [curentExperience, setCurrentExperience] = useState(0);
  const [challengesComppleted, setChallengesComppleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null); 

  const expienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = curentExperience + amount;

    if (finalExperience >= expienceToNextLevel) {
      finalExperience= finalExperience - expienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesComppleted(challengesComppleted + 1);
  }

  return (
    <ChallengesContext.Provider 
      value={{ 
        level, 
        curentExperience, 
        challengesComppleted, 
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        expienceToNextLevel,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
