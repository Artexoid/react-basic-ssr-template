import React from 'react';

const Document = (props) => {
  const { children } = props;

  return (
    <html lang="en">
      <head>
        <title>Test</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="/assets/bundle.js" async />
      </head>
      <body>
        <div id="app">
          {children}
        </div>
      </body>
    </html>
  )
}

export default Document;
