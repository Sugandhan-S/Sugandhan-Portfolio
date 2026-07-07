import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import type { PaletteMode } from '@mui/material';
import { createAppTheme } from './theme';

interface ColorModeContextValue {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = 'portfolio-color-mode';

/** Read the initial mode: saved preference first, then the OS setting. */
const getInitialMode = (): PaletteMode => {
  if (typeof window === 'undefined') return 'dark';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  const prefersLight = window.matchMedia(
    '(prefers-color-scheme: light)',
  ).matches;
  return prefersLight ? 'light' : 'dark';
};

/**
 * Provides theme mode via Context — deliberately lightweight.
 * A portfolio has no shared server state or complex client state, so a global
 * store (Redux Toolkit) would be over-engineering; Context is the right tool.
 */
export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>(getInitialMode);

  const toggleColorMode = useCallback(() => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  const theme = useMemo(() => createAppTheme(mode), [mode]);
  const value = useMemo(() => ({ mode, toggleColorMode }), [mode, toggleColorMode]);

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useColorMode(): ColorModeContextValue {
  const ctx = useContext(ColorModeContext);
  if (!ctx) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return ctx;
}
