import { useState, useCallback } from 'react';
import type { MotionStyle } from 'framer-motion';

export interface UseBoopConfig {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  timing?: number;
}

export function useBoop(config: UseBoopConfig = {}) {
  const {
    x = 0,
    y = 0,
    rotation = 0,
    scale = 1,
    timing = 150,
  } = config;

  const [isBooped, setIsBooped] = useState(false);

  const style: MotionStyle = {
    transform: isBooped
      ? `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`
      : `translate(0px, 0px) rotate(0deg) scale(1)`,
  };

  const trigger = useCallback(() => {
    setIsBooped(true);
    setTimeout(() => setIsBooped(false), timing);
  }, [timing]);

  return [style, trigger] as const;
} 