import {
  Box,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { MetricText } from '../common/MetricText';
import { experience } from '../../data/experience';

export function Experience() {
  return (
    <Box
      component="section"
      id="experience"
      sx={{ py: { xs: 6, md: 10 } }}
    >
      <Container>
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Experience"
            title="A track record of shipping in teams"
          />
        </Reveal>

        <Box sx={{ maxWidth: 820 }}>
          {experience.map((role, i) => (
            <Reveal key={role.id} delay={i * 0.05}>
              <Box
                sx={{
                  position: 'relative',
                  pl: { xs: 3, md: 4 },
                  pb: { xs: 5, md: 6 },
                  borderLeft: '1px solid',
                  borderColor: 'divider',
                  '&:last-of-type': { borderColor: 'transparent', pb: 0 },
                }}
              >
                {/* Timeline node */}
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    left: '-5px',
                    top: 6,
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    boxShadow: (t) =>
                      `0 0 0 4px ${t.palette.background.default}`,
                  }}
                />

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
                    sx={{ color: 'primary.main' }}
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
                    sx={{ mb: 2, color: 'text.primary', fontStyle: 'italic' }}
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
                      <Box
                        aria-hidden
                        sx={{
                          mt: '9px',
                          flexShrink: 0,
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          bgcolor: 'text.secondary',
                          opacity: 0.6,
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
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
