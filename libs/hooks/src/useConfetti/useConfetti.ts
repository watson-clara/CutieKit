import { useCallback } from 'react';
import confetti from 'canvas-confetti';
import type { Options as ConfettiConfig } from 'canvas-confetti';

export type ConfettiOptions = Partial<ConfettiConfig>;

export function useConfetti() {
  const trigger = useCallback((options: ConfettiOptions = {}) => {
    void confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      ...options,
    });
  }, []);

  return trigger;
}

export type UseConfettiReturn = ReturnType<typeof useConfetti>; 