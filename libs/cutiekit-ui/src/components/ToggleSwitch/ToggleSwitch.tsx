import { Switch } from '@headlessui/react';
import { motion } from 'framer-motion';

export interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

export function ToggleSwitch({
  checked,
  onChange,
  label,
  size = 'md',
}: ToggleSwitchProps) {
  const sizeClasses = {
    sm: 'h-5 w-9',
    md: 'h-6 w-11',
    lg: 'h-7 w-14',
  };

  const thumbSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  return (
    <Switch.Group>
      <div className="flex items-center gap-3">
        <Switch
          checked={checked}
          onChange={onChange}
          className={`
            ${checked ? 'bg-sanrio-pink' : 'bg-gray-200'}
            relative inline-flex
            ${sizeClasses[size]}
            rounded-full
            transition-colors
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-sanrio-pink
            focus-visible:ring-opacity-75
          `}
        >
          <motion.span
            layout
            className={`
              ${checked ? 'translate-x-full' : 'translate-x-0'}
              inline-block
              ${thumbSizes[size]}
              transform
              rounded-full
              bg-white
              shadow-lg
              ring-0
              transition-transform
              m-1
            `}
          />
        </Switch>
        <Switch.Label className="text-sm text-gray-700">{label}</Switch.Label>
      </div>
    </Switch.Group>
  );
} 