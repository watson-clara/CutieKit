import { motion } from 'framer-motion';
import { useMood } from '@cutiekit/hooks';
import type { Mood } from '@cutiekit/hooks';

const moods: Array<{
  value: Mood;
  emoji: string;
  label: string;
}> = [
  { value: 'happy', emoji: '😊', label: 'Happy' },
  { value: 'excited', emoji: '🤗', label: 'Excited' },
  { value: 'neutral', emoji: '😐', label: 'Neutral' },
  { value: 'sleepy', emoji: '😴', label: 'Sleepy' },
  { value: 'sad', emoji: '😢', label: 'Sad' },
];

export interface MoodSliderProps {
  onChange?: (mood: Mood) => void;
  initialMood?: Mood;
}

export function MoodSlider({ onChange, initialMood = 'neutral' }: MoodSliderProps) {
  const [mood, setMood] = useMood(initialMood as any);

  const handleMoodChange = (newMood: string) => {
    setMood(newMood as any);
    onChange?.(newMood as Mood);
  };

  return (
    <div className="flex gap-2 p-4 bg-sanrio-white rounded-xl shadow-sm">
      {moods.map(({ value, emoji, label }) => (
        <motion.button
          key={value}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`
            p-3 rounded-full
            ${mood === value ? 'bg-sanrio-pink' : 'bg-gray-100'}
            transition-colors
          `}
          onClick={() => handleMoodChange(value)}
          aria-label={label}
        >
          <span className="text-2xl">{emoji}</span>
        </motion.button>
      ))}
    </div>
  );
} 