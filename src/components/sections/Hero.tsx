import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { keyframes } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Reveal } from '../common/Reveal';
import { gridBackground } from '../../theme/theme';
import { headlineStats, profile } from '../../data/profile';

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
`;

export function Hero() {
  const theme = useTheme();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Box
      component="section"
      id="top"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 14, md: 20 },
        pb: { xs: 8, md: 12 },
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: gridBackground(theme.palette.mode),
          backgroundSize: '46px 46px',
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 65% at 18% 5%, #000 15%, transparent 72%)',
          maskImage:
            'radial-gradient(ellipse 85% 65% at 18% 5%, #000 15%, transparent 72%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={{ xs: 3, md: 4 }} sx={{ maxWidth: 860 }}>
          <Reveal>
            <Stack direction="row" spacing={1.25} alignItems="center">
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  animation: `${pulse} 2.4s ease-in-out infinite`,
                }}
                aria-hidden
              />
              <Typography variant="overline" color="text.secondary">
                {profile.role} · Fintech &amp; Platforms
              </Typography>
            </Stack>
          </Reveal>

          <Reveal delay={0.05}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.9rem', sm: '3.8rem', md: '4.6rem' },
                lineHeight: 1.02,
              }}
            >
              {profile.name}
            </Typography>
          </Reveal>

          <Reveal delay={0.1}>
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: 'text.primary',
                fontWeight: 500,
                maxWidth: 720,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                lineHeight: 1.35,
              }}
            >
              {profile.tagline}
            </Typography>
          </Reveal>

          <Reveal delay={0.15}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 620 }}
            >
              {profile.summary}
            </Typography>
          </Reveal>

          <Reveal delay={0.2}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              sx={{ pt: 1 }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => scrollTo('work')}
              >
                View selected work
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollTo('contact')}
              >
                Get in touch
              </Button>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                <IconButton
                  component="a"
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Reveal>

          <Reveal delay={0.28}>
            <Stack
              direction="row"
              spacing={{ xs: 2, sm: 4 }}
              divider={<Divider orientation="vertical" flexItem />}
              sx={{ pt: { xs: 3, md: 5 }, flexWrap: 'wrap', rowGap: 2 }}
            >
              {headlineStats.map((stat) => (
                <Box key={stat.label}>
                  <Typography
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700,
                      fontSize: { xs: '1.5rem', md: '1.9rem' },
                      color: 'primary.main',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      letterSpacing: '0.02em',
                      mt: 0.5,
                      display: 'block',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Reveal>
        </Stack>
      </Container>
    </Box>
  );
}
