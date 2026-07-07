import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SkipLink } from './components/common/SkipLink';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

/**
 * A portfolio is essentially a single page, so routing is intentionally light:
 * one content route plus a catch-all 404. In-page navigation is handled by
 * smooth-scrolling to section ids. The structure leaves room to grow — e.g. a
 * dedicated `/work/:id` case-study route — without reshaping the app.
 */
export default function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
      }}
    >
      <SkipLink />
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}
