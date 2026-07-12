import { useState } from 'react';
import { Box, Chip, Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { SpotlightCard } from '../common/SpotlightCard';
import { TechMarquee } from '../common/TechMarquee';
import { accentGradient, sectionGlowBackground } from '../../theme/theme';
import { skillGroups } from '../../data/skills';

// Mode-aware category icons to add immediate visual signposting.
const categoryIcons: Record<string, string> = {
  Languages: '💻',
  'Frontend Core': '⚛️',
  'Backend & Data': '🗄️',
  'Tools & Architecture': '⚙️',
};

interface SkillGroupCardProps {
  group: typeof skillGroups[number];
  isDark: boolean;
  accentColor: string;
  violetColor: string;
  theme: any;
}

function SkillGroupCard({ group, isDark, accentColor, violetColor, theme }: SkillGroupCardProps) {
  const [hovered, setHovered] = useState(false);

  const shadowStyle = hovered ? (
    isDark
      ? `0 16px 40px ${alpha(accentColor, 0.18)}, 0 0 0 1px ${alpha(accentColor, 0.1)}`
      : `0 16px 40px ${alpha(accentColor, 0.12)}, 0 0 0 1px ${alpha(accentColor, 0.08)}`
  ) : 'none';

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        flex: 1,
        borderRadius: '16px',
        padding: '1.5px',
        background: accentGradient(theme.palette.mode),
        transition: 'box-shadow 280ms ease, transform 220ms ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: shadowStyle,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <SpotlightCard
        spotlightColor={isDark ? 'rgba(90,200,216,0.08)' : 'rgba(15,122,136,0.05)'}
        size={320}
        style={{
          height: '100%',
          borderRadius: '14.5px',
          backgroundColor: theme.palette.background.paper,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header stack */}
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              background: isDark
                ? 'rgba(255, 255, 255, 0.04)'
                : 'rgba(0, 0, 0, 0.03)',
              border: '1px solid',
              borderColor: theme.palette.divider,
              flexShrink: 0,
            }}
          >
            {categoryIcons[group.category] ?? '🔹'}
          </div>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 600,
              fontSize: '1.15rem',
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            {group.category}
          </Typography>
        </Stack>

        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.72rem',
            letterSpacing: '0.02em',
            mb: 2.5,
            display: 'block',
          }}
        >
          {group.caption}
        </Typography>

        {/* Chips stack */}
        <div style={{ marginTop: 'auto' }}>
          <Stack
            direction="row"
            sx={{ flexWrap: 'wrap', gap: 0.75 }}
          >
            {group.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                size="small"
                sx={{
                  transition: 'all 180ms ease',
                  cursor: 'default',
                  '&:hover': {
                    background: isDark
                      ? `linear-gradient(135deg, ${alpha(accentColor, 0.15)} 0%, ${alpha(violetColor, 0.12)} 100%)`
                      : `linear-gradient(135deg, ${alpha(accentColor, 0.1)} 0%, ${alpha(violetColor, 0.07)} 100%)`,
                    borderColor: alpha(accentColor, 0.4),
                    transform: 'translateY(-1px)',
                    color: 'primary.main',
                  },
                }}
              />
            ))}
          </Stack>
        </div>
      </SpotlightCard>
    </div>
  );
}

export function Skills() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const accentColor = theme.palette.primary.main;
  const violetColor = isDark ? '#7C3AED' : '#6D28D9';

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 3, md: 5 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: sectionGlowBackground(theme.palette.mode, 'left'),
          pointerEvents: 'none',
        },
      }}
    >
      <Container sx={{ position: 'relative' }}>
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Competencies"
            title="My technical toolbox"
          />
        </Reveal>

        {/* 2x2 grid of cards matching the Projects section design exactly */}
        <Grid container spacing={3} alignItems="stretch">
          {skillGroups.map((group, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={group.category}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <Reveal
                delay={i * 0.08}
                style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '100%' }}
              >
                <SkillGroupCard
                  group={group}
                  isDark={isDark}
                  accentColor={accentColor}
                  violetColor={violetColor}
                  theme={theme}
                />
              </Reveal>
            </Grid>
          ))}
        </Grid>

        {/* ── "Also works with" marquee card ── */}
        <Reveal delay={0.25}>
          <div
            style={{
              marginTop: '32px',
              borderRadius: '16px',
              padding: '1.5px',
              background: accentGradient(theme.palette.mode),
            }}
          >
            <SpotlightCard
              spotlightColor={isDark ? 'rgba(90,200,216,0.06)' : 'rgba(15,122,136,0.04)'}
              size={500}
              style={{
                borderRadius: '14.5px',
                backgroundColor: theme.palette.background.paper,
                padding: '24px',
              }}
            >
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems={{ xs: 'stretch', md: 'center' }}
                spacing={3}
              >
                <div style={{ flexShrink: 0, minWidth: '220px' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      fontFamily: '"Space Grotesk", sans-serif',
                      mb: 0.5,
                    }}
                  >
                    Also works with
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.67rem',
                      display: 'block',
                    }}
                  >
                    Adjacent tools & libraries
                  </Typography>
                </div>

                {/* Tech Marquee Container */}
                <div
                  style={{
                    flex: 1,
                    overflow: 'hidden',
                    maskImage: 'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)',
                  }}
                >
                  <TechMarquee
                    items={[
                      // Frontend
                      'SCSS',
                      'Tailwind CSS',
                      'Responsive Design',
                      'React Native',
                      'Webpack Module Federation',
                      'Vite',

                      // Backend
                      'Java',
                      'PHP',

                      // Databases
                      'Amazon RDS',
                      'Redis',

                      // Cloud & AWS
                      'Amazon S3',
                      'API Gateway',
                      'Amazon SNS',
                      'Amazon EventBridge',
                      'Amazon CloudFront',
                      'AWS Secrets Manager',
                      'AWS CloudFormation',

                      // Architecture & APIs
                      'GraphQL',
                      'Serverless',
                      'Module Federation',

                      // DevOps & Infrastructure
                      'Linux',

                      // Version Control & CI/CD
                      'Git',
                      'GitHub Actions',
                      'GitLab'
                    ]}
                    duration={35}
                    direction="left"
                  />
                </div>
              </Stack>
            </SpotlightCard>
          </div>
        </Reveal>
      </Container>
    </Box>
  );
}
