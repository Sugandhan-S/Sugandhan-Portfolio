import { useRef, useCallback, type ReactNode, type CSSProperties } from 'react';
import { useReducedMotion } from 'framer-motion';

interface SpotlightCardProps {
  children: ReactNode;
  /** Color of the spotlight radial gradient. Should be semi-transparent. */
  spotlightColor?: string;
  /** Size of the spotlight in px. Default 400. */
  size?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * A card wrapper that renders a radial gradient "spotlight" that follows
 * the mouse cursor across its surface. Zero layout side effects — wrap any
 * existing card content with this component.
 *
 * Renders nothing extra on prefers-reduced-motion to avoid distraction.
 */
export function SpotlightCard({
  children,
  spotlightColor = 'rgba(90, 200, 216, 0.08)',
  size = 400,
  className,
  style,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || reduceMotion) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty('--spotlight-x', `${x}px`);
      cardRef.current.style.setProperty('--spotlight-y', `${y}px`);
      cardRef.current.style.setProperty('--spotlight-opacity', '1');
    },
    [reduceMotion]
  );

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--spotlight-opacity', '0');
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        /* CSS custom props set via JS */
        '--spotlight-x': '50%',
        '--spotlight-y': '50%',
        '--spotlight-opacity': '0',
        '--spotlight-size': `${size}px`,
        '--spotlight-color': spotlightColor,
        ...style,
      } as CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* The spotlight pseudo-element is rendered as a real div for React compat */}
      {!reduceMotion && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            background: `radial-gradient(
              var(--spotlight-size) circle at var(--spotlight-x) var(--spotlight-y),
              var(--spotlight-color),
              transparent 70%
            )`,
            opacity: 'var(--spotlight-opacity)' as unknown as number,
            transition: 'opacity 200ms ease',
          }}
        />
      )}
      {/* Content sits above the spotlight */}
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        {children}
      </div>
    </div>
  );
}
