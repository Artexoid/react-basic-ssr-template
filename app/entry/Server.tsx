import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Document from 'server/ui/Document';
import App from 'ui/App';

export const render = () => '<!DOCTYPE html>' + ReactDOMServer.renderToString(
  <Document>
    <App />
  </Document>
);
