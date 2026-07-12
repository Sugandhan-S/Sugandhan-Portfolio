import {
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { alpha, keyframes } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CircleIcon from '@mui/icons-material/Circle';
import { Reveal } from '../common/Reveal';
import { DecryptedText } from '../common/DecryptedText';
import { CountUp } from '../common/CountUp';
import { MagneticButton } from '../common/MagneticButton';
import { profile } from '../../data/profile';

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
`;

const slowSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const slowSpinReverse = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

export function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const accentColor = theme.palette.primary.main;
  const violetColor = isDark ? '#7C3AED' : '#6D28D9';

  return (
    <section id="top" style={{ paddingTop: 'clamp(64px, 10vw, 96px)', paddingBottom: 'clamp(32px, 6vw, 64px)' }}>
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* ───── LEFT: Text content ───── */}
          <Grid item xs={12} md={7}>
            <Stack spacing={{ xs: 3, md: 4 }} sx={{ maxWidth: 700 }}>
              <Reveal>
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <div
                    aria-hidden
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: accentColor,
                      animation: `${pulse} 2.4s ease-in-out infinite`,
                    }}
                  />
                  <Typography variant="overline" color="text.secondary">
                    <DecryptedText
                      text={`${profile.role} · Fintech & Platforms`}
                      delay={300}
                      speed={30}
                    />
                  </Typography>
                </Stack>
              </Reveal>

              <Reveal delay={0.05}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.9rem', sm: '3.8rem', md: '4.4rem' },
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
                    maxWidth: 680,
                    fontSize: { xs: '1.15rem', md: '1.4rem' },
                    lineHeight: 1.4,
                  }}
                >
                  {profile.tagline}
                </Typography>
              </Reveal>

              <Reveal delay={0.15}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ maxWidth: 600 }}
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
                  <MagneticButton
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => scrollTo('work')}
                    pull={0.15}
                    sx={{
                      background: `linear-gradient(135deg, ${accentColor} 0%, ${violetColor} 100%)`,
                      color: '#fff',
                      boxShadow: `0 4px 20px ${alpha(accentColor, 0.35)}`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${accentColor} 0%, ${violetColor} 100%)`,
                        boxShadow: `0 6px 28px ${alpha(accentColor, 0.48)}`,
                      },
                    }}
                  >
                    View selected work
                  </MagneticButton>
                  <MagneticButton
                    variant="outlined"
                    size="large"
                    onClick={() => scrollTo('contact')}
                    pull={0.15}
                  >
                    Get in touch
                  </MagneticButton>
                  <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                    <IconButton
                      component="a"
                      href={profile.links.github}
                      target="_blank"
                      rel="noopener"
                      aria-label="GitHub"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: alpha(accentColor, 0.08),
                        },
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      component="a"
                      href={profile.links.linkedin}
                      target="_blank"
                      rel="noopener"
                      aria-label="LinkedIn"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: alpha(accentColor, 0.08),
                        },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Reveal>

              <Reveal delay={0.28}>
                <Stack
                  direction="row"
                  spacing={{ xs: 2, sm: 2 }}
                  divider={<Divider orientation="vertical" flexItem />}
                  sx={{ pt: { xs: 3, md: 5 }, flexWrap: { xs: 'wrap', md: 'nowrap' }, rowGap: 2 }}
                >
                  {/* 3.5+ */}
                  <div>
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
                      <CountUp to={3.5} decimals={1} duration={1400} delay={200} />
                      +
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.02em', mt: 0.5, display: 'block' }}>
                      Years shipping
                    </Typography>
                  </div>
                  {/* 40% */}
                  <div>
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
                      <CountUp to={40} duration={1600} delay={350} />%
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.02em', mt: 0.5, display: 'block' }}>
                      Faster content gen
                    </Typography>
                  </div>
                  {/* 24/7 — not a pure number, skip CountUp */}
                  <div>
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
                      <CountUp to={24} duration={1400} delay={200} />/7
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.02em', mt: 0.5, display: 'block' }}>
                      Trading uptime built
                    </Typography>
                  </div>
                  {/* 3 */}
                  <div>
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
                      <CountUp to={3} duration={1000} delay={500} />
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.02em', mt: 0.5, display: 'block' }}>
                      Products delivered
                    </Typography>
                  </div>
                </Stack>
              </Reveal>
            </Stack>
          </Grid>

          {/* ───── RIGHT: Profile photo ───── */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              alignItems: 'center',
            }}
          >
            <Reveal delay={0.18}>
              <div
                style={{
                  position: 'relative',
                  width: 'clamp(200px, 26vw, 300px)',
                  height: 'clamp(200px, 26vw, 300px)',
                  margin: '0 auto',
                  animation: `${float} 6s ease-in-out infinite`,
                }}
              >
                {/* Outer rotating dashed ring */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: -16,
                    borderRadius: '50%',
                    border: `1.5px dashed ${alpha(accentColor, 0.35)}`,
                    animation: `${slowSpin} 18s linear infinite`,
                  }}
                />

                {/* Inner rotating dashed ring (opposite direction) */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: -32,
                    borderRadius: '50%',
                    border: `1px dashed ${alpha(violetColor, 0.22)}`,
                    animation: `${slowSpinReverse} 28s linear infinite`,
                  }}
                />

                {/* Glow behind photo */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: -4,
                    borderRadius: '50%',
                    background: isDark
                      ? `radial-gradient(circle, ${alpha(accentColor, 0.22)} 0%, transparent 70%)`
                      : `radial-gradient(circle, ${alpha(accentColor, 0.16)} 0%, transparent 70%)`,
                    filter: 'blur(12px)',
                  }}
                />

                {/* Gradient border ring */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: -3,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${accentColor} 0%, ${violetColor} 100%)`,
                    zIndex: 1,
                  }}
                />

                {/* White/dark separator ring */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: -1,
                    borderRadius: '50%',
                    background: isDark ? '#060d1a' : '#ffffff',
                    zIndex: 2,
                  }}
                />

                {/* Profile photo */}
                <img
                  src="/Profile Photo.png"
                  alt="Sugandhan S — Full-Stack Engineer"
                  style={{
                    position: 'relative',
                    zIndex: 3,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />

                {/* Availability badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: -20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: 99,
                    backgroundColor: isDark ? 'rgba(17,26,46,0.88)' : 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: `1px solid ${isDark ? 'rgba(90,200,216,0.22)' : 'rgba(15,122,136,0.18)'}`,
                    boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.1)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <CircleIcon
                    sx={{
                      fontSize: 8,
                      color: '#22c55e',
                      animation: `${pulse} 2s ease-in-out infinite`,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '0.7rem',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontWeight: 600,
                      color: 'text.secondary',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Open to opportunities
                  </Typography>
                </div>
              </div>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
