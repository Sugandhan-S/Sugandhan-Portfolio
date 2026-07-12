import { useTheme } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import type { ReactNode } from 'react';
import { DotField } from './DotField';

// Slow keyframe animation loops for atmospheric movement
const float1 = keyframes`
  0%   { transform: translate(0px, 0px) scale(1); }
  33%  { transform: translate(30px, 50px) scale(1.05); }
  66%  { transform: translate(-20px, 20px) scale(0.95); }
  100% { transform: translate(0px, 0px) scale(1); }
`;

const float2 = keyframes`
  0%   { transform: translate(0px, 0px) scale(1); }
  50%  { transform: translate(-40px, -30px) scale(1.08); }
  100% { transform: translate(0px, 0px) scale(1); }
`;

interface AuroraBackgroundProps {
  children?: ReactNode;
}

/**
 * Full-page animated background wrapper.
 * Places slow-moving glowing color blobs at different vertical offsets
 * to provide visual depth consistently down the entire scrolling page.
 */
export function AuroraBackground({ children }: AuroraBackgroundProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Background Blobs Container */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {/* Blob 1: Teal (Hero Area - Top Left) */}
        <div style={{
          position: 'absolute',
          top: '2%', left: '-15%',
          width: '65vw', height: '65vw',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(90,200,216,0.18) 0%, rgba(90,200,216,0.03) 55%, transparent 75%)'
            : 'radial-gradient(circle, rgba(15,122,136,0.1) 0%, rgba(15,122,136,0.02) 55%, transparent 75%)',
          filter: 'blur(60px)',
          animation: `${float1} 45s ease-in-out infinite`,
        }} />

        {/* Blob 2: Violet (Projects Area - Middle Right) */}
        <div style={{
          position: 'absolute',
          top: '18%', right: '-15%',
          width: '60vw', height: '60vw',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, rgba(124,58,237,0.02) 55%, transparent 75%)'
            : 'radial-gradient(circle, rgba(109,40,217,0.08) 0%, rgba(109,40,217,0.01) 55%, transparent 75%)',
          filter: 'blur(70px)',
          animation: `${float2} 55s ease-in-out infinite`,
        }} />

        {/* Blob 3: Teal/Blue (Experience Area - Middle Left) */}
        <div style={{
          position: 'absolute',
          top: '42%', left: '-10%',
          width: '55vw', height: '55vw',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(90,200,216,0.13) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(15,122,136,0.07) 0%, transparent 70%)',
          filter: 'blur(55px)',
          animation: `${float1} 50s ease-in-out infinite`,
        }} />

        {/* Blob 4: Violet (Skills Area - Middle Right) */}
        <div style={{
          position: 'absolute',
          top: '60%', right: '-15%',
          width: '55vw', height: '55vw',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(109,40,217,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: `${float2} 60s ease-in-out infinite`,
        }} />

        {/* Blob 5: Teal (Education & Contact Area - Bottom Left) */}
        <div style={{
          position: 'absolute',
          top: '80%', left: '-15%',
          width: '65vw', height: '65vw',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(90,200,216,0.16) 0%, rgba(90,200,216,0.02) 55%, transparent 75%)'
            : 'radial-gradient(circle, rgba(15,122,136,0.09) 0%, rgba(15,122,136,0.01) 55%, transparent 75%)',
          filter: 'blur(65px)',
          animation: `${float1} 48s ease-in-out infinite`,
        }} />

        {/* Dynamic canvas dot field overlay */}
        <DotField />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
