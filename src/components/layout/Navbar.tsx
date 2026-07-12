import { useCallback, useState } from 'react';
import {
  AppBar,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import DescriptionIcon from '@mui/icons-material/DescriptionOutlined';
import { useColorMode } from '../../theme/ColorModeContext';
import { navItems } from '../../data/navigation';
import { profile } from '../../data/profile';

export function Navbar() {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 8,
  });

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setDrawerOpen(false);
  }, []);

  const themeToggle = (
    <Tooltip title={mode === 'dark' ? 'Switch to light' : 'Switch to dark'}>
      <IconButton
        onClick={toggleColorMode}
        aria-label={
          mode === 'dark' ? 'Activate light mode' : 'Activate dark mode'
        }
        sx={{ color: 'text.secondary' }}
      >
        {mode === 'dark' ? (
          <LightModeIcon fontSize="small" />
        ) : (
          <DarkModeIcon fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? alpha(theme.palette.background.default, 0.72)
            : 'transparent',
          backdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'divider' : 'transparent',
          transition:
            'background-color 240ms ease, border-color 240ms ease, backdrop-filter 240ms ease',
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
            <button
              onClick={() => scrollTo('top')}
              aria-label="Back to top"
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '6px',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                color: 'inherit',
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Sugandhan
              </Typography>
              <span style={{ color: theme.palette.primary.main, fontWeight: 700, fontSize: '1.1rem' }}>.</span>
            </button>

            <div style={{ flexGrow: 1 }} />

            {isMobile ? (
              <Stack direction="row" spacing={0.5} alignItems="center">
                {themeToggle}
                <IconButton
                  onClick={() => setDrawerOpen(true)}
                  aria-label="Open navigation menu"
                  sx={{ color: 'text.primary' }}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            ) : (
              <Stack direction="row" spacing={1} alignItems="center">
                {navItems.map((item) => (
                  <Button
                    key={item.target}
                    onClick={() => scrollTo(item.target)}
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                      px: 1.5,
                      '&:hover': {
                        color: 'text.primary',
                        backgroundColor: 'transparent',
                        transform: 'none',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                {themeToggle}
                <Button
                  variant="outlined"
                  startIcon={<DescriptionIcon fontSize="small" />}
                  href={profile.links.resumeUrl}
                  target="_blank"
                  rel="noopener"
                  sx={{ ml: 1 }}
                >
                  Résumé
                </Button>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: 'background.paper',
            backgroundImage: 'none',
            borderLeft: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="flex-end"
          sx={{ p: 1.5 }}
        >
          <IconButton
            onClick={() => setDrawerOpen(false)}
            aria-label="Close navigation menu"
            sx={{ color: 'text.secondary' }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <List sx={{ px: 1 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.target}
              onClick={() => scrollTo(item.target)}
              sx={{ borderRadius: 1.5, py: 1.25 }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItemButton>
          ))}
        </List>
        <div style={{ padding: '16px', marginTop: 'auto' }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<DescriptionIcon fontSize="small" />}
            href={profile.links.resumeUrl}
            target="_blank"
            rel="noopener"
          >
            Download résumé
          </Button>
        </div>
      </Drawer>
    </>
  );
}
