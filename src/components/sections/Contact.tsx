import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/DescriptionOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';
import { Reveal } from '../common/Reveal';
import { gridBackground } from '../../theme/theme';
import { profile } from '../../data/profile';

export function Contact() {
  const theme = useTheme();

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <Reveal>
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
              px: { xs: 3, md: 8 },
              py: { xs: 6, md: 9 },
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
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 640 }}>
              <Typography variant="overline" sx={{ color: 'primary.main' }}>
                05 · Contact
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                sx={{ mt: 1.5, mb: 2, fontSize: { xs: '2rem', md: '2.6rem' } }}
              >
                Let&rsquo;s build something solid.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
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
        </Reveal>
      </Container>
    </Box>
  );
}
