import { useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';

/**
 * A subtle horizontal gradient divider between sections.
 * Fades from transparent → primary accent → transparent.
 */
export function SectionDivider() {
  const theme = useTheme();
  const accentColor = theme.palette.primary.main;

  return (
    <div
      aria-hidden
      style={{
        height: '1px',
        width: '85%',
        margin: '0 auto',
        background: `linear-gradient(90deg, transparent 0%, ${alpha(accentColor, 0.3)} 40%, ${alpha(accentColor, 0.3)} 60%, transparent 100%)`,
        borderRadius: '4px',
      }}
    />
  );
}
