import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { skillGroups } from '../../data/skills';

export function Skills() {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Stack"
            title="The tools I reach for"
          />
        </Reveal>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {skillGroups.map((group, i) => (
            <Grid item xs={12} sm={6} lg={3} key={group.category}>
              <Reveal delay={i * 0.06}>
                <Box
                  sx={{
                    height: '100%',
                    pt: 2.5,
                    borderTop: '2px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  <Typography variant="h6" component="h3" sx={{ mb: 0.25 }}>
                    {group.category}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      display: 'block',
                      mb: 2,
                    }}
                  >
                    {group.caption}
                  </Typography>
                  <Stack
                    direction="row"
                    sx={{ flexWrap: 'wrap', gap: 0.75 }}
                  >
                    {group.skills.map((skill) => (
                      <Chip key={skill} label={skill} size="small" />
                    ))}
                  </Stack>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
