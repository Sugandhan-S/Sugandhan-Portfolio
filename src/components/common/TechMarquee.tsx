import { useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';

interface TechMarqueeProps {
  /** List of technology names to display. */
  items: string[];
  /** Scroll speed in seconds for one full loop. Default 28. */
  duration?: number;
  /** Direction: 'left' scrolls left (default), 'right' scrolls right. */
  direction?: 'left' | 'right';
}

function MarqueeChip({ item, isDark, accentColor }: { item: string; isDark: boolean; accentColor: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '5px',
        paddingBottom: '5px',
        marginLeft: '6px',
        marginRight: '6px',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: hovered
          ? alpha(accentColor, 0.45)
          : isDark
            ? alpha(accentColor, 0.2)
            : alpha(accentColor, 0.15),
        backgroundColor: hovered
          ? alpha(accentColor, 0.1)
          : isDark
            ? alpha(accentColor, 0.06)
            : alpha(accentColor, 0.04),
        flexShrink: 0,
        whiteSpace: 'nowrap',
        transition: 'border-color 180ms ease, background-color 180ms ease',
      }}
    >
      <Typography
        variant="caption"
        sx={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 500, color: 'text.secondary', letterSpacing: '0.03em' }}
      >
        {item}
      </Typography>
    </div>
  );
}

/**
 * Infinite auto-scrolling tech-name marquee strip.
 * Items are duplicated to create a seamless loop.
 * Pauses on hover. Respects prefers-reduced-motion (shows static wrapping list).
 */
export function TechMarquee({
  items,
  duration = 28,
  direction = 'left',
}: TechMarqueeProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const reduceMotion = useReducedMotion();
  const accentColor = theme.palette.primary.main;

  // Duplicate the list for seamless looping
  const doubled = [...items, ...items];

  if (reduceMotion) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {items.map((item) => (
          <MarqueeChip
            key={item}
            item={item}
            isDark={isDark}
            accentColor={accentColor}
          />
        ))}
      </div>
    );
  }

  const keyframeId = `marquee-${direction}`;

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        /* Fade edges */
        maskImage: 'linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)',
      }}
      className="marquee-container"
    >
      {/* CSS Styles injection for marquee animations without MUI Box overhead */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="marquee-track"
        style={{
          animation: `${keyframeId} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <MarqueeChip
            key={`${item}-${i}`}
            item={item}
            isDark={isDark}
            accentColor={accentColor}
          />
        ))}
      </div>
    </div>
  );
}
