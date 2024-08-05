import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Layout from './ui/Layout.jsx';
import App from './ui/HelloJSX.jsx';

const html = '<!DOCTYPE html>' + ReactDOMServer.renderToString(
  <Layout>
    <App />
  </Layout>
);

console.log('OUT');
console.log(html);
