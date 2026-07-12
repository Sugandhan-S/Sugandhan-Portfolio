import { useEffect, useRef } from 'react';
import { useTheme } from '@mui/material';
import { useReducedMotion } from 'framer-motion';

interface Dot {
  x: number;   // Original anchor X coordinate
  y: number;   // Original anchor Y coordinate
  cx: number;  // Current animated X coordinate
  cy: number;  // Current animated Y coordinate
  vx: number;  // Velocity X
  vy: number;  // Velocity Y
}

interface DotFieldProps {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  bulgeStrength?: number;
  stiffness?: number;
  damping?: number;
}

/**
 * High-performance canvas-based interactive dot field.
 * Dots bulge away gently from the mouse cursor and spring back into position.
 * Bypasses React render cycles to maintain 60FPS.
 */
export function DotField({
  dotRadius = 1.5,
  dotSpacing = 32,
  cursorRadius = 180,
  bulgeStrength = 36,
  stiffness = 0.12,
  damping = 0.85,
}: DotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef<Dot[]>([]);
  const requestRef = useRef<number | null>(null);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const initDots = () => {
      const rect = canvas.getBoundingClientRect();
      // Ensure high-DPI scaling
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      const dots: Dot[] = [];
      const cols = Math.floor(width / dotSpacing);
      const rows = Math.floor(height / dotSpacing);

      // Centered grid offset
      const startX = (width - cols * dotSpacing) / 2 + dotSpacing / 2;
      const startY = (height - rows * dotSpacing) / 2 + dotSpacing / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = startX + c * dotSpacing;
          const y = startY + r * dotSpacing;
          dots.push({
            x,
            y,
            cx: x,
            cy: y,
            vx: 0,
            vy: 0,
          });
        }
      }
      dotsRef.current = dots;
    };

    // Initialize once
    initDots();

    // Resize observer to recalculate dot positions when container size changes
    const resizeObserver = new ResizeObserver(() => {
      initDots();
    });
    
    // Track canvas parent (which spans the entire scroll container)
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Capture mouse movement relative to the canvas (which spans the full page height)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Translate viewport clientX/clientY to page-relative canvas coordinates
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Tick update loop
    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      // Dot color tuned to match theme default grid styles
      ctx.fillStyle = isDark ? 'rgba(148, 163, 184, 0.22)' : 'rgba(15, 23, 42, 0.12)';

      const dots = dotsRef.current;
      const mouse = mouseRef.current;

      for (const dot of dots) {
        // Spring calculation relative to target positions
        let targetX = dot.x;
        let targetY = dot.y;

        const dx = mouse.x - dot.cx;
        const dy = mouse.y - dot.cy;
        const distSq = dx * dx + dy * dy;

        if (distSq < cursorRadius * cursorRadius) {
          const dist = Math.sqrt(distSq);
          if (dist > 0.1) {
            const angle = Math.atan2(dy, dx);
            const force = (1 - dist / cursorRadius) * bulgeStrength;
            // Push dot away from mouse
            targetX = dot.x - Math.cos(angle) * force;
            targetY = dot.y - Math.sin(angle) * force;
          }
        }

        if (reduceMotion) {
          // No animations, just render immediately at target
          dot.cx = targetX;
          dot.cy = targetY;
        } else {
          // Spring integration
          const ax = (targetX - dot.cx) * stiffness;
          const ay = (targetY - dot.cy) * stiffness;
          dot.vx = (dot.vx + ax) * damping;
          dot.vy = (dot.vy + ay) * damping;
          dot.cx += dot.vx;
          dot.cy += dot.vy;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.cx, dot.cy, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      requestRef.current = requestAnimationFrame(tick);
    };

    // Start render loop
    requestRef.current = requestAnimationFrame(tick);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [dotRadius, dotSpacing, cursorRadius, bulgeStrength, stiffness, damping, isDark, reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
