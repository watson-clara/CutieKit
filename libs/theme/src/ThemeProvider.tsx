import React, { createContext, useContext, useState } from 'react';
import type { SanrioTheme } from './themes';
import { HelloKittyTheme } from './themes';

interface ThemeContextType {
  theme: SanrioTheme;
  setTheme: (theme: SanrioTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<SanrioTheme>(HelloKittyTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="transition-colors duration-200" style={theme as React.CSSProperties}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 