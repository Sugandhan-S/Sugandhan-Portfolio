import { Stack, Typography, useTheme } from '@mui/material';
import { ShinyText } from './ShinyText';

interface SectionHeadingProps {
  /** Two-digit index, e.g. "01" — encodes reading order down the page. */
  index: string;
  eyebrow: string;
  title: string;
}

export function SectionHeading({ index, eyebrow, title }: SectionHeadingProps) {
  const theme = useTheme();
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
        <div
          aria-hidden
          style={{ width: 24, height: 1, backgroundColor: theme.palette.divider }}
        />
        <ShinyText
          component="span"
          variant="overline"
          text={eyebrow.toUpperCase()}
          speed={6}
          sx={{ letterSpacing: '0.16em' }}
        />
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
