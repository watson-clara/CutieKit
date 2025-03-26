import { motion } from 'framer-motion';
import type { SanrioColor, Size } from '../../types/common';

export interface BubbleBadgeProps {
  label: string;
  variant?: SanrioColor;
  size?: Size;
}

export function BubbleBadge({ 
  label, 
  variant = 'pink', 
  size = 'md' 
}: BubbleBadgeProps) {
  const variantClasses = {
    pink: 'bg-sanrio-pink text-sanrio-black',
    blue: 'bg-sanrio-blue text-sanrio-black',
    lavender: 'bg-sanrio-lavender text-sanrio-black',
    yellow: 'bg-sanrio-yellow text-sanrio-black',
    mint: 'bg-sanrio-mint text-sanrio-black',
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2',
  };

  return (
    <motion.span
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      className={`
        inline-block rounded-full
        font-medium
        ${variantClasses[variant]}
        ${sizeClasses[size]}
      `}
    >
      {label}
    </motion.span>
  );
} 