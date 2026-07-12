import { Typography, type TypographyProps } from '@mui/material';
import { keyframes } from '@mui/material/styles';

const shineAnim = keyframes`
  0%   { background-position: 200% center; }
  100% { background-position: -200% center; }
`;

interface ShinyTextProps extends TypographyProps {
  text: string;
  /** Animation cycle duration in seconds. Default 5. */
  speed?: number;
}

/**
 * Typography with a subtle light-sweep shimmer effect.
 * Used for section eyebrows and labels to add premium polish.
 */
export function ShinyText({ text, speed = 5, sx, ...props }: ShinyTextProps) {
  return (
    <Typography
      {...props}
      sx={{
        display: 'inline-block',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? `linear-gradient(110deg,
                rgba(147,160,184,0.6) 20%,
                rgba(255,255,255,1)   45%,
                rgba(90,200,216,0.9)  55%,
                rgba(147,160,184,0.6) 80%)`
            : `linear-gradient(110deg,
                rgba(85,98,122,0.7)   20%,
                rgba(15,23,42,1)      45%,
                rgba(15,122,136,0.9)  55%,
                rgba(85,98,122,0.7)   80%)`,
        backgroundSize: '200% auto',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        animation: `${shineAnim} ${speed}s linear infinite`,
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
}
