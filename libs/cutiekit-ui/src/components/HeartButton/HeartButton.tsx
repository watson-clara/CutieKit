import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { useBoop } from 'libs/hooks/src/useBoop/useBoop.ts';
import type { Size } from '../../types/common';

export interface HeartButtonProps {
  onClick?: () => void;
  label: string;
  size?: Size;
}

export function HeartButton({ onClick, label, size = 'md' }: HeartButtonProps) {
  const [style, trigger] = useBoop({ scale: 1.2 });

  const sizeClasses = {
    sm: 'text-sm p-2',
    md: 'text-base p-3',
    lg: 'text-lg p-4',
  };

  const handleClick = () => {
    trigger();
    onClick?.();
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        rounded-full
        flex items-center gap-2
        bg-sanrio-pink text-sanrio-black
        hover:bg-sanrio-lavender
        transition-colors
        ${sizeClasses[size]}
      `}
      onClick={handleClick}
      aria-label={label}
    >
      <motion.span style={style}>
        <FaHeart className="text-red-500" />
      </motion.span>
      <span>{label}</span>
    </motion.button>
  );
} 