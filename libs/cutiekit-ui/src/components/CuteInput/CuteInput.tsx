import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

export interface CuteInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: ReactNode;
}

export const CuteInput = forwardRef<HTMLInputElement, CuteInputProps>(
  ({ label, error, icon, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {icon}
            </div>
          )}
          <motion.input
            ref={ref}
            whileFocus={{ scale: 1.01 }}
            className={`
              block w-full
              px-3 py-2
              ${icon ? 'pl-10' : ''}
              rounded-xl
              border-2
              ${error ? 'border-red-300' : 'border-sanrio-pink'}
              focus:outline-none
              focus:ring-2
              focus:ring-sanrio-pink
              focus:border-sanrio-pink
              placeholder-gray-400
              transition-all
            `}
            {...props}
          />
        </div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-600"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

CuteInput.displayName = 'CuteInput'; 