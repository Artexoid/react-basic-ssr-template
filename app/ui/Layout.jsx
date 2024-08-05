const Layout = (props) => {
  const { children } = props;

  return (
    <html lang="en">
      <head>
        <title>Test</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout;
