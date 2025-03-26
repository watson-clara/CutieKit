import { motion } from 'framer-motion';
import type { Mood } from '@cutiekit/hooks';

export interface ProfileCardProps {
  name: string;
  avatar: string;
  status?: string;
  mood?: Mood;
  bio?: string;
}

const moodEmojis: Record<Mood, string> = {
  happy: '😊',
  neutral: '😐',
  sad: '😢',
  excited: '🤗',
  sleepy: '😴',
};

export function ProfileCard({ 
  name, 
  avatar, 
  status, 
  mood = 'neutral',
  bio 
}: ProfileCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-sanrio-white rounded-2xl p-6 shadow-lg max-w-sm"
    >
      <div className="flex items-center gap-4 mb-4">
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-sanrio-pink"
        />
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          {status && (
            <p className="text-sm text-gray-600">{status}</p>
          )}
        </div>
        <span className="text-2xl ml-auto" role="img" aria-label={`Mood: ${mood}`}>
          {moodEmojis[mood]}
        </span>
      </div>
      {bio && (
        <p className="text-gray-700 text-sm">{bio}</p>
      )}
    </motion.div>
  );
} 