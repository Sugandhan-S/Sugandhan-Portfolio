import { Box } from '@mui/material';

/** Split on percentages (capturing group keeps them), test with a stateless RE. */
const SPLIT_PATTERN = /(\d+%)/g;
const IS_METRIC = /^\d+%$/;

interface MetricTextProps {
  children: string;
}

/**
 * Renders a string with any percentage metrics emphasized in the accent
 * colour and mono face — the through-line of a résumé full of measured impact.
 */
export function MetricText({ children }: MetricTextProps) {
  const parts = children.split(SPLIT_PATTERN);

  return (
    <>
      {parts.map((part, i) =>
        IS_METRIC.test(part) ? (
          <Box
            key={i}
            component="span"
            sx={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontWeight: 600,
              color: 'primary.main',
              whiteSpace: 'nowrap',
            }}
          >
            {part}
          </Box>
        ) : (
          part
        ),
      )}
    </>
  );
}
