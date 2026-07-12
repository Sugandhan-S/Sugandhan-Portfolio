import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button, type ButtonProps, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';

interface MagneticButtonProps extends Omit<ButtonProps, 'component'> {
  children: React.ReactNode;
  /** Pull intensity (0–1). Default 0.18. */
  pull?: number;
}

/**
 * An MUI Button that gently follows the cursor on hover using a spring animation.
 * Drop-in replacement for <Button>.
 */
export function MagneticButton({ children, pull = 0.18, sx, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springCfg = { damping: 18, stiffness: 280, mass: 0.5 };
  const x = useSpring(rawX, springCfg);
  const y = useSpring(rawY, springCfg);

  // Scale down movement range proportionally to pull
  const moveX = useTransform(x, [-1, 1], [-22 * pull, 22 * pull]);
  const moveY = useTransform(y, [-1, 1], [-22 * pull, 22 * pull]);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left - r.width / 2) / (r.width / 2));
    rawY.set((e.clientY - r.top - r.height / 2) / (r.height / 2));
  };

  const onLeave = () => {
    setHovered(false);
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      style={{ x: moveX, y: moveY, display: 'inline-block' }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
    >
      <Button
        ref={ref}
        {...props}
        sx={{
          ...(hovered && props.variant === 'contained' && {
            boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.4)}`,
          }),
          ...sx,
        }}
      >
        {children}
      </Button>
    </motion.div>
  );
}
