import { motion } from 'framer-motion';

export interface SparkleDividerProps {
  color?: 'pink' | 'blue' | 'lavender' | 'yellow' | 'mint';
}

export function SparkleDivider({ color = 'pink' }: SparkleDividerProps) {
  const colorClasses = {
    pink: 'bg-sanrio-pink',
    blue: 'bg-sanrio-blue',
    lavender: 'bg-sanrio-lavender',
    yellow: 'bg-sanrio-yellow',
    mint: 'bg-sanrio-mint',
  };

  return (
    <div className="flex items-center gap-4 py-4">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        className={`h-px ${colorClasses[color]}`}
      />
      <motion.span
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2 
        }}
        className="text-xl"
        role="img"
        aria-hidden="true"
      >
        ✨
      </motion.span>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        className={`h-px ${colorClasses[color]}`}
      />
    </div>
  );
} 