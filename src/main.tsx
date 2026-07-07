import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeProvider } from './theme/ColorModeContext';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root was not found in index.html');
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </BrowserRouter>
  </StrictMode>,
);
