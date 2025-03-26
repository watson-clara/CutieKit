import { useState, useCallback } from 'react';

export type Mood = 'happy' | 'neutral' | 'sad' | 'excited' | 'sleepy';

export interface UseMoodReturn {
  mood: Mood;
  setMood: (newMood: Mood) => void;
  isMoodSet: boolean;
}

export function useMood(initialMood: Mood = 'neutral'): UseMoodReturn {
  const [mood, setMoodState] = useState<Mood>(initialMood);
  const [isMoodSet, setIsMoodSet] = useState(false);

  const setMood = useCallback((newMood: Mood) => {
    setMoodState(newMood);
    setIsMoodSet(true);
  }, []);

  return {
    mood,
    setMood,
    isMoodSet,
  };
} 