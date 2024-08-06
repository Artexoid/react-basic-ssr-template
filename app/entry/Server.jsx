import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Document from '../ui/Document.jsx';
import App from '../ui/App.jsx';

export const render = () => '<!DOCTYPE html>' + ReactDOMServer.renderToString(
  <Document>
    <App />
  </Document>
);
