import { useState } from 'react';
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
import { SpotlightCard } from '../common/SpotlightCard';
import { accentGradient, sectionGlowBackground } from '../../theme/theme';
import { projects } from '../../data/projects';

interface ProjectCardProps {
  project: typeof projects[number];
  isDark: boolean;
  accentColor: string;
  violetColor: string;
  theme: any;
}

function ProjectCard({ project, isDark, accentColor, violetColor, theme }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const shadowStyle = isHovered ? (
    isDark
      ? `0 20px 50px ${alpha(accentColor, 0.2)}, 0 0 0 1px ${alpha(accentColor, 0.12)}`
      : `0 20px 50px ${alpha(accentColor, 0.15)}, 0 0 0 1px ${alpha(accentColor, 0.10)}`
  ) : 'none';

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        flex: 1,
        borderRadius: '16px',
        /* Gradient border via outline trick */
        padding: '1.5px',
        background: accentGradient(theme.palette.mode),
        transition: 'box-shadow 280ms ease, transform 220ms ease',
        transform: isHovered ? 'translateY(-6px)' : 'none',
        boxShadow: shadowStyle,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* SpotlightCard adds cursor-following glow inside the card */}
      <SpotlightCard
        spotlightColor={isDark ? 'rgba(90,200,216,0.1)' : 'rgba(15,122,136,0.07)'}
        size={360}
        style={{
          height: '100%',
          borderRadius: '14.5px',
          backgroundColor: theme.palette.background.paper,
          padding: '24px',
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
          } as any}
        >
          {project.impact}
        </Typography>

        <div style={{ marginTop: 'auto' }}>
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
        </div>
      </SpotlightCard>
    </div>
  );
}

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
                <ProjectCard
                  project={project}
                  isDark={isDark}
                  accentColor={accentColor}
                  violetColor={violetColor}
                  theme={theme}
                />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
