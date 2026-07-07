import { Box, Stack, Typography } from '@mui/material';

interface SectionHeadingProps {
  /** Two-digit index, e.g. "01" — encodes reading order down the page. */
  index: string;
  eyebrow: string;
  title: string;
}

export function SectionHeading({ index, eyebrow, title }: SectionHeadingProps) {
  return (
    <Stack spacing={1.5} sx={{ mb: { xs: 4, md: 6 } }}>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Typography
          component="span"
          variant="overline"
          sx={{ color: 'primary.main' }}
        >
          {index}
        </Typography>
        <Box
          sx={{ width: 24, height: '1px', bgcolor: 'divider' }}
          aria-hidden
        />
        <Typography component="span" variant="overline" color="text.secondary">
          {eyebrow}
        </Typography>
      </Stack>
      <Typography
        variant="h3"
        component="h2"
        sx={{ fontSize: { xs: '1.9rem', md: '2.4rem' }, maxWidth: 720 }}
      >
        {title}
      </Typography>
    </Stack>
  );
}
