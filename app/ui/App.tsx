import React, { type FC } from 'react';
import { useCallback } from 'react';

export type AppProps = {
  test?: string,
}

const App: FC<AppProps> = (props) => {
  const {
    test
  } = props;

  const handleClick = useCallback(() => {
    alert(10);
  }, []);

  return (
    <div>
      <h1>Hello, JSX! {test}</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
