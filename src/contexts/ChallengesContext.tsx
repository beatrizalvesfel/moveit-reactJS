import { createContext, ReactNode, useState } from 'react';

interface ChallengesContextData {
  level: number; 
  challengesComppleted: number; 
  curentExperience: number; 
  startNewChallenge: () => void;
  levelUp: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [curentExperience, setExperience] = useState(0);
  const [challengesComppleted, setChallengesComppleted] =useState(0);


  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('New challenge');
  }

  return (
    <ChallengesContext.Provider 
      value={{ 
        level, 
        curentExperience, 
        challengesComppleted, 
        levelUp,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
