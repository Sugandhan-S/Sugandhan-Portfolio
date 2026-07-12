import { useState } from 'react';
import {
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { alpha, keyframes } from '@mui/material/styles';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { MetricText } from '../common/MetricText';
import { sectionGlowBackground } from '../../theme/theme';
import { experience } from '../../data/experience';

const nodeGlow = keyframes`
  0%, 100% { box-shadow: 0 0 0 3px var(--bg), 0 0 10px var(--accent); opacity: 1; }
  50% { box-shadow: 0 0 0 3px var(--bg), 0 0 18px var(--accent); opacity: 0.85; }
`;

/**
 * Per-role impact data surfaced in the right-side metric panel.
 * Each panel appears directly beside its matching timeline entry.
 */
const roleImpact: Record<
  string,
  {
    headline: string;
    headlineLabel: string;
    metrics: { value: string; label: string }[];
    domain: string;
  }
> = {
  meradhan: {
    headline: '24/7',
    headlineLabel: 'Trading uptime',
    metrics: [
      { value: 'Prod', label: 'Deployed to production' },
      { value: 'KYC', label: 'KYC-gated flows built' },
      { value: 'ISIN', label: 'Fuzzy bond search' },
    ],
    domain: 'Fintech · Bond Trading',
  },
  'powerschool-ae2': {
    headline: '40%',
    headlineLabel: 'Faster content gen',
    metrics: [
      { value: '30%', label: 'Processing uplift' },
      { value: '15%', label: 'Workflow efficiency' },
      { value: '20%', label: 'Student engagement' },
    ],
    domain: 'EdTech SaaS · Scale',
  },
  'powerschool-intern': {
    headline: '25%',
    headlineLabel: 'Faster search time',
    metrics: [
      { value: '15%', label: 'Bug recurrence cut' },
      { value: 'LMS', label: 'Schoology platform' },
      { value: 'PHP', label: 'Legacy modernisation' },
    ],
    domain: 'LMS Frontend · Reliability',
  },
};

interface ExperienceRowProps {
  role: typeof experience[number];
  impact: typeof roleImpact[string] | undefined;
  i: number;
  total: number;
  isDark: boolean;
  accentColor: string;
  violetColor: string;
  theme: any;
}

function ExperienceRow({
  role,
  impact,
  i,
  total,
  isDark,
  accentColor,
  violetColor,
  theme,
}: ExperienceRowProps) {
  const [hovered, setHovered] = useState(false);

  const hoverBg = hovered
    ? isDark
      ? alpha(accentColor, 0.04)
      : alpha(accentColor, 0.025)
    : 'transparent';

  const hoverBorder = hovered
    ? isDark
      ? alpha(accentColor, 0.15)
      : alpha(accentColor, 0.12)
    : 'transparent';

  return (
    <Reveal delay={i * 0.06}>
      {/* Timeline entry row container */}
      <div
        style={{
          position: 'relative',
          paddingLeft: '32px',
          paddingBottom: '40px',
        }}
      >
        {/* Timeline line */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: 0,
            top: 8,
            bottom: 0,
            width: 2,
            background:
              i === total - 1
                ? `linear-gradient(to bottom, ${accentColor} 0%, transparent 80%)`
                : `linear-gradient(to bottom, ${accentColor} 0%, ${alpha(violetColor, 0.5)} 60%, ${alpha(violetColor, 0.15)} 100%)`,
            borderRadius: 2,
          }}
        />

        {/* Glowing timeline node */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: '-6px',
            top: 6,
            width: 14,
            height: 14,
            borderRadius: '50%',
            backgroundColor: accentColor,
            boxShadow: `0 0 0 3px ${theme.palette.background.default}, 0 0 12px ${alpha(accentColor, 0.6)}`,
            animation: `${nodeGlow} 3s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
            zIndex: 1,
          }}
        />

        {/* 2-column layout: role content + metric panel */}
        <Grid container spacing={{ xs: 0, md: 4 }} alignItems="flex-start">
          {/* Left: Role content */}
          <Grid item xs={12} md={7}>
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => hovered && setHovered(false)}
              style={{
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '12px',
                paddingBottom: '12px',
                borderRadius: '12px',
                border: '1px solid',
                borderColor: hoverBorder,
                backgroundColor: hoverBg,
                transition: 'background-color 240ms ease, border-color 240ms ease',
              }}
            >
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ display: 'block', mb: 0.5 }}
              >
                {role.period}
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 0, sm: 1 }}
                alignItems={{ xs: 'flex-start', sm: 'baseline' }}
                sx={{ mb: 0.5 }}
              >
                <Typography variant="h6" component="h3">
                  {role.role}
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    background: `linear-gradient(90deg, ${accentColor} 0%, ${violetColor} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {role.company}
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: role.context ? 0.5 : 2 }}
              >
                {role.location}
              </Typography>

              {role.context && (
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    color: 'text.secondary',
                    fontStyle: 'italic',
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 1.5,
                    borderLeft: '2px solid',
                    borderColor: 'primary.main',
                    bgcolor: alpha(accentColor, 0.06),
                  }}
                >
                  {role.context}
                </Typography>
              )}

              <Stack component="ul" spacing={1.25} sx={{ m: 0, pl: 0, listStyle: 'none' }}>
                {role.achievements.map((point, idx) => (
                  <Stack
                    key={idx}
                    component="li"
                    direction="row"
                    spacing={1.5}
                    alignItems="flex-start"
                  >
                    <div
                      aria-hidden
                      style={{
                        marginTop: '9px',
                        flexShrink: 0,
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        backgroundColor: accentColor,
                        opacity: 0.7,
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      <MetricText>{point}</MetricText>
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Stack
                direction="row"
                spacing={0.75}
                sx={{ mt: 2, flexWrap: 'wrap', gap: 0.75 }}
              >
                {role.stack.map((tech) => (
                  <Chip key={tech} label={tech} size="small" />
                ))}
              </Stack>
            </div>
          </Grid>

          {/* Right: Per-role impact metric panel — desktop only */}
          {impact && (
            <Grid
              item
              md={5}
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'flex-start', pt: 1 }}
            >
              <div
                style={{
                  width: '100%',
                  borderRadius: '14px',
                  border: '1px solid',
                  borderColor: isDark
                    ? alpha(accentColor, 0.18)
                    : alpha(accentColor, 0.14),
                  backgroundColor: isDark
                    ? alpha(accentColor, 0.04)
                    : alpha(accentColor, 0.025),
                  padding: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Glow underlay */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: -30,
                    right: -30,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: isDark
                      ? `radial-gradient(circle, ${alpha(accentColor, 0.12)} 0%, transparent 70%)`
                      : `radial-gradient(circle, ${alpha(accentColor, 0.08)} 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />

                {/* Domain label */}
                <Typography
                  variant="overline"
                  sx={{
                    display: 'block',
                    mb: 1.5,
                    color: 'primary.main',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                  }}
                >
                  {impact.domain}
                </Typography>

                {/* Headline metric */}
                <div style={{ marginBottom: '16px' }}>
                  <Typography
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700,
                      fontSize: '2.4rem',
                      lineHeight: 1,
                      background: `linear-gradient(135deg, ${accentColor} 0%, ${violetColor} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {impact.headline}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.04em' }}
                  >
                    {impact.headlineLabel}
                  </Typography>
                </div>

                {/* Secondary metrics */}
                <Stack spacing={1}>
                  {impact.metrics.map(({ value, label }) => (
                    <Stack
                      key={label}
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                    >
                      <div
                        style={{
                          minWidth: 40,
                          height: 26,
                          paddingLeft: '8px',
                          paddingRight: '8px',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: isDark
                            ? alpha(accentColor, 0.1)
                            : alpha(accentColor, 0.08),
                          border: '1px solid',
                          borderColor: isDark
                            ? alpha(accentColor, 0.2)
                            : alpha(accentColor, 0.14),
                          flexShrink: 0,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"JetBrains Mono", monospace',
                            fontWeight: 700,
                            fontSize: '0.68rem',
                            color: 'primary.main',
                            lineHeight: 1,
                          }}
                        >
                          {value}
                        </Typography>
                      </div>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ lineHeight: 1.3 }}
                      >
                        {label}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </div>
            </Grid>
          )}
        </Grid>
      </div>
    </Reveal>
  );
}

export function Experience() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const accentColor = theme.palette.primary.main;
  const violetColor = isDark ? '#7C3AED' : '#6D28D9';

  return (
    <Box
      component="section"
      id="experience"
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
            index="02"
            eyebrow="Experience"
            title="A track record of shipping in teams"
          />
        </Reveal>

        {experience.map((role, i) => (
          <ExperienceRow
            key={role.id}
            role={role}
            impact={roleImpact[role.id]}
            i={i}
            total={experience.length}
            isDark={isDark}
            accentColor={accentColor}
            violetColor={violetColor}
            theme={theme}
          />
        ))}
      </Container>
    </Box>
  );
}
