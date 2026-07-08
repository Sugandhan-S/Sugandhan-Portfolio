import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/DescriptionOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';
import { Reveal } from '../common/Reveal';
import { gridBackground, accentGradient } from '../../theme/theme';
import { profile } from '../../data/profile';


export function Contact() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const accentColor = theme.palette.primary.main;
  const violetColor = isDark ? '#7C3AED' : '#6D28D9';

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 3, md: 5 } }}>
      <Container>
        <Reveal>
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 5,
              /* Gradient border */
              p: '1.5px',
              background: accentGradient(theme.palette.mode),
            }}
          >
            {/* Card inner */}
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '18.5px',
                backgroundColor: isDark
                  ? 'rgba(11, 17, 32, 0.92)'
                  : 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                px: { xs: 3, md: 8 },
                py: { xs: 6, md: 9 },
                /* Blueprint grid overlay */
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: gridBackground(theme.palette.mode),
                  backgroundSize: '40px 40px',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 70% 90% at 90% 10%, #000 10%, transparent 70%)',
                  maskImage:
                    'radial-gradient(ellipse 70% 90% at 90% 10%, #000 10%, transparent 70%)',
                  pointerEvents: 'none',
                },
                /* Radial glow blob in corner */
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: -60,
                  right: -60,
                  width: 300,
                  height: 300,
                  borderRadius: '50%',
                  background: isDark
                    ? `radial-gradient(circle, ${alpha(violetColor, 0.18)} 0%, transparent 70%)`
                    : `radial-gradient(circle, ${alpha(violetColor, 0.1)} 0%, transparent 70%)`,
                  pointerEvents: 'none',
                  filter: 'blur(20px)',
                },
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 640 }}>
                {/* Section label */}
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                  <Box
                    sx={{
                      height: 2,
                      width: 24,
                      borderRadius: 4,
                      background: accentGradient(theme.palette.mode),
                    }}
                  />
                  <Typography
                    variant="overline"
                    sx={{
                      background: accentGradient(theme.palette.mode),
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    05 · Contact
                  </Typography>
                </Stack>

                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ mt: 0.5, mb: 2, fontSize: { xs: '2rem', md: '2.6rem' } }}
                >
                  Let&rsquo;s build something solid.
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  I&rsquo;m {profile.availability.toLowerCase()}. If you&rsquo;re
                  hiring for full-stack work — or want to talk architecture — my
                  inbox is open.
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mb: 4, color: 'text.secondary' }}
                >
                  <LocationOnIcon fontSize="small" />
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    {profile.location}
                  </Typography>
                </Stack>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1.5}
                  alignItems={{ xs: 'stretch', sm: 'center' }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<EmailIcon />}
                    href={`mailto:${profile.email}`}
                    sx={{
                      background: `linear-gradient(135deg, ${accentColor} 0%, ${violetColor} 100%)`,
                      color: '#fff',
                      boxShadow: `0 4px 20px ${alpha(accentColor, 0.35)}`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${accentColor} 0%, ${violetColor} 100%)`,
                        boxShadow: `0 6px 28px ${alpha(accentColor, 0.5)}`,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {profile.email}
                  </Button>
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon fontSize="small" />}
                      href={profile.links.github}
                      target="_blank"
                      rel="noopener"
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<LinkedInIcon fontSize="small" />}
                      href={profile.links.linkedin}
                      target="_blank"
                      rel="noopener"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<DescriptionIcon fontSize="small" />}
                      href={profile.links.resumeUrl}
                      target="_blank"
                      rel="noopener"
                    >
                      Résumé
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
