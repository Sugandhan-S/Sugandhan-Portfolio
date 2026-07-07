import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Stagger helper: delay in seconds. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
}

/**
 * Fades and lifts content into view once as it enters the viewport.
 * When the user prefers reduced motion, content simply appears — no transform.
 */
export function Reveal({ children, delay = 0, y = 18 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
