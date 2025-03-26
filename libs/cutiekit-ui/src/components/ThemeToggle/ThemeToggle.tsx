import { motion } from 'framer-motion';
import { useTheme } from '@cutiekit/theme';
import { HelloKittyTheme, KuromiTheme, CinnamorollTheme } from '@cutiekit/theme';
import type { SanrioTheme } from '@cutiekit/theme';

interface ThemeOption {
  name: string;
  theme: SanrioTheme;
  icon: string;
}

const themes: ThemeOption[] = [
  { name: 'Hello Kitty', theme: HelloKittyTheme, icon: '🎀' },
  { name: 'Kuromi', theme: KuromiTheme, icon: '🖤' },
  { name: 'Cinnamoroll', theme: CinnamorollTheme, icon: '☁️' },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      {themes.map(({ name, theme: themeOption, icon }) => (
        <motion.button
          key={name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setTheme(themeOption)}
          className={`
            p-3 rounded-full
            ${theme === themeOption ? 'bg-sanrio-pink' : 'bg-gray-100'}
            transition-colors
          `}
          aria-label={`Switch to ${name} theme`}
        >
          <span className="text-xl" role="img" aria-hidden="true">
            {icon}
          </span>
        </motion.button>
      ))}
    </div>
  );
} 