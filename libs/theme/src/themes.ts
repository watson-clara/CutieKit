export interface SanrioTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  border: string;
}

export const HelloKittyTheme: SanrioTheme = {
  primary: 'var(--sanrio-pink)',
  secondary: 'var(--sanrio-white)',
  accent: 'var(--sanrio-red)',
  background: 'var(--sanrio-white)',
  text: 'var(--sanrio-black)',
  border: 'var(--sanrio-pink)',
};

export const KuromiTheme: SanrioTheme = {
  primary: 'var(--sanrio-lavender)',
  secondary: 'var(--sanrio-black)',
  accent: 'var(--sanrio-purple)',
  background: 'var(--sanrio-black)',
  text: 'var(--sanrio-white)',
  border: 'var(--sanrio-lavender)',
};

export const CinnamorollTheme: SanrioTheme = {
  primary: 'var(--sanrio-blue)',
  secondary: 'var(--sanrio-white)',
  accent: 'var(--sanrio-mint)',
  background: 'var(--sanrio-white)',
  text: 'var(--sanrio-black)',
  border: 'var(--sanrio-blue)',
}; 