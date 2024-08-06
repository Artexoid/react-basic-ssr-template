import React from 'react';
import ReactDOMClient from 'react-dom/client';

import App from '../ui/App.jsx';

const rootElement = document.querySelector('#app');

if (rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);
  root.render(<App />);
}
