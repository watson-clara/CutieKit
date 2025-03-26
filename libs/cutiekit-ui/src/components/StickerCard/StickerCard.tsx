import { motion } from 'framer-motion';

export interface StickerCardProps {
  emoji: string;
  title: string;
  description: string;
  color?: 'pink' | 'blue' | 'lavender' | 'yellow' | 'mint';
}

export function StickerCard({ 
  emoji, 
  title, 
  description, 
  color = 'pink' 
}: StickerCardProps) {
  const colorClasses = {
    pink: 'bg-sanrio-pink',
    blue: 'bg-sanrio-blue',
    lavender: 'bg-sanrio-lavender',
    yellow: 'bg-sanrio-yellow',
    mint: 'bg-sanrio-mint',
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`
        ${colorClasses[color]}
        p-6 rounded-2xl
        shadow-lg
        transform transition-all
        hover:shadow-xl
      `}
    >
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sanrio-black/80">{description}</p>
    </motion.div>
  );
} 