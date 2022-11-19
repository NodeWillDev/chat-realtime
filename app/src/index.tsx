import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyled from './styled';
import { RepopupProvider } from 'repopup';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RepopupProvider theme="dark">
      <GlobalStyled />
      <App />
    </RepopupProvider>
  </React.StrictMode>
);