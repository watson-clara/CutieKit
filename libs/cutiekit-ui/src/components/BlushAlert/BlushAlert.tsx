import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';

export interface BlushAlertProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  isVisible?: boolean;
  onClose?: () => void;
}

export function BlushAlert({
  message,
  type = 'info',
  isVisible = true,
  onClose
}: BlushAlertProps) {
  const config = {
    success: {
      icon: FaCheckCircle,
      bg: 'bg-sanrio-mint',
      text: 'text-green-800',
      role: 'status',
    },
    error: {
      icon: FaExclamationCircle,
      bg: 'bg-red-100',
      text: 'text-red-800',
      role: 'alert',
    },
    info: {
      icon: FaInfoCircle,
      bg: 'bg-sanrio-blue',
      text: 'text-blue-800',
      role: 'status',
    },
  } as const;

  const Icon = config[type].icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`
            ${config[type].bg}
            ${config[type].text}
            rounded-xl p-4
            flex items-center gap-3
            shadow-lg
          `}
          role={config[type].role}
        >
          <Icon className="text-xl flex-shrink-0" aria-hidden="true" />
          <p className="flex-grow">{message}</p>
          {onClose && (
            <button
              onClick={onClose}
              className="text-sm opacity-70 hover:opacity-100 p-1"
              aria-label="Close alert"
              type="button"
            >
              <span aria-hidden="true">✕</span>
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
} 