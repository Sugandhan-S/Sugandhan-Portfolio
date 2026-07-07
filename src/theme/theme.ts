import { createTheme, responsiveFontSizes, alpha } from '@mui/material/styles';
import type { PaletteMode, Theme } from '@mui/material';

/* -------------------------------------------------------------------------- */
/*  Design tokens                                                             */
/*  A single source of truth for palette + type. The look is a deep slate-    */
/*  navy base with a restrained teal accent and a mono/utility face for data. */
/* -------------------------------------------------------------------------- */

const fonts = {
  display: '"Space Grotesk", "Inter", system-ui, sans-serif',
  body: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  mono: '"JetBrains Mono", "SFMono-Regular", ui-monospace, "Menlo", monospace',
} as const;

/** Re-exported so components can reach for a face without importing internals. */
export const FONT_DISPLAY = fonts.display;
export const FONT_BODY = fonts.body;
export const FONT_MONO = fonts.mono;

/** Fixed navbar height, shared between the navbar and scroll offsets. */
export const NAV_HEIGHT = 64;

const palettes = {
  dark: {
    bg: '#0B1120',
    paper: '#111A2E',
    text: '#E6EBF4',
    muted: '#93A0B8',
    divider: 'rgba(148, 163, 184, 0.14)',
    accent: '#5AC8D8',
    accentContrast: '#04222A',
    secondary: '#A9B4CC',
  },
  light: {
    bg: '#F6F7F9',
    paper: '#FFFFFF',
    text: '#0E1726',
    muted: '#55627A',
    divider: 'rgba(15, 23, 42, 0.10)',
    accent: '#0F7A88',
    accentContrast: '#FFFFFF',
    secondary: '#4A5878',
  },
} as const;

/** A faint blueprint grid, tuned per mode — used once, in the hero. */
export const gridBackground = (mode: PaletteMode): string => {
  const line =
    mode === 'dark' ? 'rgba(148,163,184,0.06)' : 'rgba(15,23,42,0.045)';
  return `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`;
};

/* -------------------------------------------------------------------------- */
/*  Theme factory                                                             */
/* -------------------------------------------------------------------------- */

export const createAppTheme = (mode: PaletteMode): Theme => {
  const c = palettes[mode];

  let theme = createTheme({
    palette: {
      mode,
      primary: { main: c.accent, contrastText: c.accentContrast },
      secondary: { main: c.secondary },
      background: { default: c.bg, paper: c.paper },
      text: { primary: c.text, secondary: c.muted },
      divider: c.divider,
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: fonts.body,
      h1: {
        fontFamily: fonts.display,
        fontWeight: 700,
        letterSpacing: '-0.03em',
        lineHeight: 1.04,
      },
      h2: {
        fontFamily: fonts.display,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
      },
      h3: {
        fontFamily: fonts.display,
        fontWeight: 600,
        letterSpacing: '-0.015em',
        lineHeight: 1.15,
      },
      h4: { fontFamily: fonts.display, fontWeight: 600, letterSpacing: '-0.01em' },
      h5: { fontFamily: fonts.display, fontWeight: 600 },
      h6: { fontFamily: fonts.display, fontWeight: 600 },
      subtitle1: { fontFamily: fonts.body, fontWeight: 500 },
      subtitle2: { fontFamily: fonts.body, fontWeight: 500 },
      body1: { fontFamily: fonts.body, lineHeight: 1.7 },
      body2: { fontFamily: fonts.body, lineHeight: 1.6 },
      overline: {
        fontFamily: fonts.mono,
        fontWeight: 500,
        fontSize: '0.72rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        lineHeight: 1.4,
      },
      button: { fontFamily: fonts.body, fontWeight: 600, letterSpacing: 0 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: 'smooth',
            // Offset anchored sections so they clear the sticky navbar.
            scrollPaddingTop: '88px',
            WebkitFontSmoothing: 'antialiased',
          },
          body: {
            backgroundColor: c.bg,
            color: c.text,
          },
          '::selection': {
            backgroundColor: alpha(c.accent, 0.28),
            color: c.text,
          },
          // Restrained, mode-aware scrollbar.
          '*::-webkit-scrollbar': { width: 10, height: 10 },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: alpha(c.muted, 0.35),
            borderRadius: 8,
            border: `2px solid ${c.bg}`,
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: alpha(c.muted, 0.55),
          },
          '@media (prefers-reduced-motion: reduce)': {
            html: { scrollBehavior: 'auto' },
            '*': {
              animationDuration: '0.001ms !important',
              transitionDuration: '0.001ms !important',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            color: c.text,
            boxShadow: 'none',
            backgroundImage: 'none',
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            borderRadius: 10,
            textTransform: 'none',
            fontWeight: 600,
            paddingInline: 20,
            paddingBlock: 10,
            transition: 'transform 160ms ease, background-color 160ms ease, border-color 160ms ease',
            '&:hover': { transform: 'translateY(-1px)' },
          },
          outlined: {
            borderColor: c.divider,
            color: c.text,
            '&:hover': {
              borderColor: alpha(c.accent, 0.6),
              backgroundColor: alpha(c.accent, 0.06),
            },
          },
          containedPrimary: {
            '&:hover': { backgroundColor: alpha(c.accent, 0.86) },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            height: 28,
            borderRadius: 8,
            fontFamily: fonts.mono,
            fontSize: '0.72rem',
            letterSpacing: '0.01em',
            border: `1px solid ${c.divider}`,
            backgroundColor: alpha(c.muted, mode === 'dark' ? 0.08 : 0.05),
            color: c.text,
          },
          label: { paddingInline: 10 },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: c.paper,
            backgroundImage: 'none',
            border: `1px solid ${c.divider}`,
            borderRadius: 16,
            boxShadow: 'none',
          },
        },
      },
      MuiLink: {
        defaultProps: { underline: 'none' },
        styleOverrides: {
          root: {
            color: c.accent,
            fontWeight: 500,
            transition: 'color 160ms ease, opacity 160ms ease',
            '&:hover': { opacity: 0.82 },
          },
        },
      },
      MuiDivider: {
        styleOverrides: { root: { borderColor: c.divider } },
      },
      MuiContainer: {
        defaultProps: { maxWidth: 'lg' },
      },
    },
  });

  theme = responsiveFontSizes(theme, { factor: 2.2 });
  return theme;
};
