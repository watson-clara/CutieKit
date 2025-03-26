import { motion } from 'framer-motion';
import { useConfetti } from '../../hooks';
import type { ReactNode } from 'react';

export interface ConfettiButtonProps {
  onClick?: () => void;
  label: string | ReactNode;
  variant?: 'primary' | 'secondary';
}

export function ConfettiButton({ onClick, label, variant = 'primary' }: ConfettiButtonProps) {
  const triggerConfetti = useConfetti();

  const handleClick = () => {
    triggerConfetti();
    onClick?.();
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-4 py-2 rounded-full
        ${variant === 'primary' 
          ? 'bg-sanrio-yellow text-sanrio-black' 
          : 'bg-sanrio-lavender text-sanrio-white'}
        hover:brightness-105
        transition-all
      `}
      onClick={handleClick}
    >
      {label}
    </motion.button>
  );
} 