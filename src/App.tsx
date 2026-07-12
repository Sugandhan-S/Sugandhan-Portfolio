import { Routes, Route } from 'react-router-dom';
import { keyframes } from '@mui/material/styles';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SkipLink } from './components/common/SkipLink';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/**
 * A portfolio is essentially a single page, so routing is intentionally light:
 * one content route plus a catch-all 404. In-page navigation is handled by
 * smooth-scrolling to section ids. The structure leaves room to grow — e.g. a
 * dedicated `/work/:id` case-study route — without reshaping the app.
 */
export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <SkipLink />
      <Navbar />
      <div
        style={{
          flexGrow: 1,
          animation: `${fadeIn} 0.5s ease-out both`,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
