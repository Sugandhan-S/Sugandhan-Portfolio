import { Box, Chip, Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { accentGradient, sectionGlowBackground } from '../../theme/theme';
import { skillGroups } from '../../data/skills';

/** Map category names to an emoji icon for quick visual scanning. */
const categoryIcons: Record<string, string> = {
  Frontend: '⚛️',
  'Backend & Data': '🔧',
  'Cloud & DevOps': '☁️',
  'Testing & Architecture': '🏗️',
};

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
            index="03"
            eyebrow="Stack"
            title="The tools I reach for"
          />
        </Reveal>

        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {skillGroups.map((group, i) => (
            <Grid item xs={12} sm={6} key={group.category}>
              <Reveal delay={i * 0.07}>
                <Box
                  sx={{
                    position: 'relative',
                    height: '100%',
                    borderRadius: '16px',
                    /* Subtle gradient border */
                    p: '1px',
                    background: isDark
                      ? `linear-gradient(135deg, rgba(90,200,216,0.25) 0%, rgba(124,58,237,0.18) 100%)`
                      : `linear-gradient(135deg, rgba(15,122,136,0.2) 0%, rgba(109,40,217,0.14) 100%)`,
                    transition: 'box-shadow 260ms ease, transform 220ms ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: isDark
                        ? `0 16px 40px ${alpha(accentColor, 0.15)}`
                        : `0 16px 40px ${alpha(accentColor, 0.10)}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      borderRadius: '15px',
                      backgroundColor: isDark
                        ? 'rgba(17, 26, 46, 0.80)'
                        : 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      p: { xs: 2.5, md: 3 },
                    }}
                  >
                    {/* Category header */}
                    <Stack direction="row" alignItems="center" spacing={1.25} sx={{ mb: 0.5 }}>
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.1rem',
                          background: accentGradient(theme.palette.mode),
                          flexShrink: 0,
                        }}
                      >
                        {categoryIcons[group.category] ?? '🔹'}
                      </Box>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                        {group.category}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        fontFamily: '"JetBrains Mono", monospace',
                        display: 'block',
                        mb: 2,
                        pl: '48px', /* align under title */
                      }}
                    >
                      {group.caption}
                    </Typography>

                    {/* Gradient top-line accent */}
                    <Box
                      aria-hidden
                      sx={{
                        height: 2,
                        borderRadius: 4,
                        background: accentGradient(theme.palette.mode),
                        mb: 2,
                        opacity: 0.7,
                      }}
                    />

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
                              background: `linear-gradient(135deg, ${alpha(accentColor, 0.15)} 0%, ${alpha(violetColor, 0.12)} 100%)`,
                              borderColor: alpha(accentColor, 0.45),
                              transform: 'translateY(-1px)',
                            },
                          }}
                        />
                      ))}
                    </Stack>
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
