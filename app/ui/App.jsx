import React from 'react';
import { useCallback } from 'react';

const HelloJSX = (props) => {
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

export default HelloJSX;
