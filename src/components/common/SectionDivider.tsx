import { Box, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';

/**
 * A subtle horizontal gradient divider between sections.
 * Fades from transparent → primary accent → transparent.
 */
export function SectionDivider() {
  const theme = useTheme();
  const accentColor = theme.palette.primary.main;

  return (
    <Box
      aria-hidden
      sx={{
        height: 1,
        mx: { xs: 3, md: 8 },
        background: `linear-gradient(90deg, transparent 0%, ${alpha(accentColor, 0.3)} 40%, ${alpha(accentColor, 0.3)} 60%, transparent 100%)`,
        borderRadius: 4,
      }}
    />
  );
}
