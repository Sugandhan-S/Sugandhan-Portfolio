import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/SchoolOutlined';
import VerifiedIcon from '@mui/icons-material/VerifiedOutlined';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { certifications, education } from '../../data/education';

export function Education() {
  return (
    <Box component="section" id="education" sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Background"
            title="Education & certifications"
          />
        </Reveal>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Reveal>
              <Stack spacing={2} sx={{ height: '100%' }}>
                {education.map((item) => (
                  <Card key={item.id} sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                        <SchoolIcon sx={{ color: 'primary.main' }} />
                        <Typography variant="overline" color="text.secondary">
                          {item.period} · {item.location}
                        </Typography>
                      </Stack>
                      <Typography variant="h6" component="h3">
                        {item.institution}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1.5 }}>
                        {item.qualification}
                      </Typography>
                      <Chip label={item.detail} size="small" />
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Reveal>
          </Grid>

          <Grid item xs={12} md={6}>
            <Reveal delay={0.08}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="overline" color="text.secondary">
                    Certifications
                  </Typography>
                  <Stack spacing={0} sx={{ mt: 1.5 }}>
                    {certifications.map((cert, i) => (
                      <Stack
                        key={cert.id}
                        direction="row"
                        spacing={1.5}
                        alignItems="center"
                        sx={{
                          py: 1.75,
                          borderTop: i === 0 ? 'none' : '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        <VerifiedIcon
                          fontSize="small"
                          sx={{ color: 'primary.main', flexShrink: 0 }}
                        />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {cert.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {cert.issuer}
                          </Typography>
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
