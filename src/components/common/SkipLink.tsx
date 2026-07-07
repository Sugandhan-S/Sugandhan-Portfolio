import { Box } from '@mui/material';

/** Keyboard-only "skip to content" link; visually hidden until focused. */
export function SkipLink() {
  return (
    <Box
      component="a"
      href="#main"
      sx={{
        position: 'absolute',
        left: 12,
        top: -48,
        zIndex: (t) => t.zIndex.modal + 1,
        px: 2,
        py: 1,
        borderRadius: 1,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'top 160ms ease',
        '&:focus-visible': { top: 12 },
      }}
    >
      Skip to content
    </Box>
  );
}
