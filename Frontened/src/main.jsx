import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <div className={`dark:bg-slate-900 dark:text-white`}>
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>
);
