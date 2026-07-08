import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { accentGradient, sectionGlowBackground } from '../../theme/theme';
import { projects } from '../../data/projects';

export function Projects() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const accentColor = theme.palette.primary.main;
  const violetColor = isDark ? '#7C3AED' : '#6D28D9';

  return (
    <Box
      component="section"
      id="work"
      sx={{
        py: { xs: 3, md: 5 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: sectionGlowBackground(theme.palette.mode, 'right'),
          pointerEvents: 'none',
        },
      }}
    >
      <Container sx={{ position: 'relative' }}>
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title="Systems I've built and shipped"
          />
        </Reveal>

        {/* alignItems="stretch" on the Grid + display:flex on items makes all cards equal height */}
        <Grid container spacing={3} alignItems="stretch">
          {projects.map((project, i) => (
            <Grid item xs={12} md={4} key={project.id} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Reveal delay={i * 0.08} style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '100%' }}>
                <Box
                  sx={{
                    position: 'relative',
                    flex: 1,
                    borderRadius: '16px',
                    /* Gradient border via outline trick */
                    p: '1.5px',
                    background: accentGradient(theme.palette.mode),
                    transition: 'box-shadow 280ms ease, transform 220ms ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: isDark
                        ? `0 20px 50px ${alpha(accentColor, 0.2)}, 0 0 0 1px ${alpha(accentColor, 0.12)}`
                        : `0 20px 50px ${alpha(accentColor, 0.15)}, 0 0 0 1px ${alpha(accentColor, 0.10)}`,
                    },
                  }}
                >
                  {/* Card inner — solid paper prevents blur bleed-through from the gradient border */}
                  <Box
                    sx={{
                      height: '100%',
                      borderRadius: '14.5px',
                      bgcolor: 'background.paper',
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >

                    <Typography
                      variant="overline"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {project.origin}
                    </Typography>

                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 1, color: 'text.primary' }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {project.summary}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2.5,
                        color: 'text.primary',
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: isDark
                          ? alpha(accentColor, 0.06)
                          : alpha(accentColor, 0.04),
                        border: '1px solid',
                        borderColor: isDark
                          ? alpha(accentColor, 0.12)
                          : alpha(accentColor, 0.1),
                        fontSize: '0.82rem',
                      }}
                    >
                      {project.impact}
                    </Typography>

                    <Box sx={{ mt: 'auto' }}>
                      <Stack
                        direction="row"
                        spacing={0.75}
                        sx={{ flexWrap: 'wrap', gap: 0.75 }}
                      >
                        {project.stack.map((tech) => (
                          <Chip key={tech} label={tech} size="small" />
                        ))}
                      </Stack>

                      {project.href && (
                        <Button
                          href={project.href}
                          target="_blank"
                          rel="noopener"
                          endIcon={<ArrowOutwardIcon fontSize="small" />}
                          sx={{
                            mt: 2,
                            px: 0,
                            color: 'primary.main',
                            '&:hover': {
                              color: violetColor,
                              backgroundColor: 'transparent',
                            },
                          }}
                        >
                          View project
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
