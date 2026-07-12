import { useEffect, useRef, useState } from 'react';
import { useReducedMotion, useInView } from 'framer-motion';

interface CountUpProps {
  /** The numeric value to count up to. Suffix (e.g. "+", "%") is handled by the parent. */
  to: number;
  /** Duration of the animation in ms. Default 1600. */
  duration?: number;
  /** Delay before counting starts (ms). Default 0. */
  delay?: number;
  /** Decimal places to show. Default 0. */
  decimals?: number;
  /** Easing function (0→1 input, 0→1 output). Default ease-out-cubic. */
  easing?: (t: number) => number;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts a number from 0 to `to` when it enters the viewport.
 * Counts once. Respects prefers-reduced-motion (shows final value immediately).
 */
export function CountUp({
  to,
  duration = 1600,
  delay = 0,
  decimals = 0,
  easing = easeOutCubic,
}: CountUpProps) {
  const reduceMotion = useReducedMotion();
  // Start at final value to avoid "0" flash before the animation fires.
  // The animation resets it to 0 and counts up once in view.
  const [count, setCount] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (reduceMotion || !isInView || hasStarted.current) return;
    hasStarted.current = true;

    let timeoutId: ReturnType<typeof setTimeout>;
    let rafId: number;
    let startTime: number | null = null;

    // Reset to 0 now that we're in view — then count up
    setCount(0);

    const step = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedValue = easing(progress) * to;
      setCount(parseFloat(easedValue.toFixed(decimals)));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    timeoutId = setTimeout(() => {
      rafId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [isInView, to, duration, delay, decimals, easing, reduceMotion]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
    </span>
  );
}
