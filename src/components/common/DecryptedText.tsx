import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>';

interface DecryptedTextProps {
  text: string;
  /** Delay before the animation starts, in ms. Default 0. */
  delay?: number;
  /** How fast each character resolves, in ms per character. Default 40. */
  speed?: number;
  /** CSS class applied to resolved characters. */
  className?: string;
  /** CSS class applied to scrambling characters. */
  scrambleClassName?: string;
}

/**
 * Matrix-style character scramble that resolves to the real text.
 * Runs once when the component mounts. Respects prefers-reduced-motion.
 */
export function DecryptedText({
  text,
  delay = 0,
  speed = 40,
  className = '',
  scrambleClassName = '',
}: DecryptedTextProps) {
  const reduceMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState<string[]>(
    reduceMotion ? text.split('') : text.split('').map(() => ' ')
  );
  const [resolved, setResolved] = useState<boolean[]>(
    new Array(text.length).fill(reduceMotion ? true : false)
  );
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (reduceMotion) return;

    const totalChars = text.length;
    let timeoutId: ReturnType<typeof setTimeout>;

    const animate = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;

      // How many characters should be resolved by now
      const resolvedCount = Math.min(
        totalChars,
        Math.floor(elapsed / speed)
      );

      setDisplayed(
        text.split('').map((char, i) => {
          if (i < resolvedCount) return char;
          if (char === ' ') return ' ';
          return CHARS[Math.floor(Math.random() * CHARS.length)] ?? char;
        })
      );
      setResolved(text.split('').map((_, i) => i < resolvedCount));

      if (resolvedCount < totalChars) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    timeoutId = setTimeout(() => {
      rafRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, delay, speed, reduceMotion]);

  return (
    <span aria-label={text}>
      {displayed.map((char, i) => (
        <span
          key={i}
          aria-hidden
          className={resolved[i] ? className : scrambleClassName}
          style={
            resolved[i]
              ? undefined
              : { opacity: 0.55 }
          }
        >
          {char}
        </span>
      ))}
    </span>
  );
}
