import { Box, Button, Container, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';

export function NotFound() {
  return (
    <Box
      component="main"
      id="main"
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Stack spacing={2} sx={{ maxWidth: 520 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main' }}
          >
            Error 404
          </Typography>
          <Typography variant="h2" component="h1">
            This page took a wrong turn.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The link may be broken or the page may have moved. Let&rsquo;s get
            you back to solid ground.
          </Typography>
          <Box>
            <Button
              component={RouterLink}
              to="/"
              variant="contained"
              startIcon={<ArrowBackIcon />}
              sx={{ mt: 1 }}
            >
              Back home
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
