import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { profile } from '../../data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: 'GitHub', href: profile.links.github, icon: <GitHubIcon fontSize="small" /> },
    { label: 'LinkedIn', href: profile.links.linkedin, icon: <LinkedInIcon fontSize="small" /> },
    { label: 'Email', href: `mailto:${profile.email}`, icon: <EmailIcon fontSize="small" /> },
  ];

  return (
    <Box
      component="footer"
      sx={{ borderTop: '1px solid', borderColor: 'divider', mt: { xs: 4, md: 6 } }}
    >
      <Container sx={{ py: { xs: 4, md: 5 } }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
        >
          <Stack spacing={0.5}>
            <Typography
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              {profile.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profile.role} · {profile.location}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={0.5} alignItems="center">
            {socials.map((s) => (
              <IconButton
                key={s.label}
                component="a"
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {s.icon}
              </IconButton>
            ))}
            <IconButton
              onClick={() =>
                document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })
              }
              aria-label="Back to top"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <KeyboardArrowUpIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: 'block',
            mt: 3,
            fontFamily: '"JetBrains Mono", monospace',
            letterSpacing: '0.02em',
          }}
        >
          © {year} {profile.name} — Built with React, TypeScript & MUI.
        </Typography>
      </Container>
    </Box>
  );
}
