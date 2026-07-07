import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { projects } from '../../data/projects';

export function Projects() {
  return (
    <Box component="section" id="work" sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title="Systems I've built and shipped"
          />
        </Reveal>

        <Grid container spacing={3}>
          {projects.map((project, i) => (
            <Grid item xs={12} md={4} key={project.id}>
              <Reveal delay={i * 0.08}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition:
                      'transform 200ms ease, border-color 200ms ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {project.origin}
                    </Typography>
                    <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
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
                      sx={{ mb: 2.5, color: 'text.primary' }}
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
                          sx={{ mt: 2, px: 0 }}
                        >
                          View project
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
