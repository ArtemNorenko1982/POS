import React, { useState, useEffect } from 'react';

const initialCount = 10;

const Test = () => {
  const [value, stateOnChange] = useState('');
  const [size, setSize] = useState(0);
  const [count, setCount] = useState(initialCount);

  const countDown = () => {
    setCount(() => count - 1);
  };

  const countUp = () => {
    setCount(() => count + 1);
  };

  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setSize(window.innerWidth);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div>
      <div>{size}</div>
      <input
        type="input"
        // eslint-disable-next-line react/destructuring-assignment
        value={value}
        onChange={(event) => stateOnChange(event.target.value)}
      />
      <div>{count}</div>
      <input type="button" name="button" value="button" />
      <input type="button" onClick={countDown} name="-" value="-" />
      <input type="button" onClick={countUp} name="+" value="+" />
      <input
        type="button"
        onClick={() => setCount(initialCount)}
        name="Reset"
        value="Reset"
      />
    </div>
  );
};

export default Test;

// eslint-disable-next-line react/state-in-constructor
//   state = { value: '' };
//   stateOnChange = (event) => {
//     const { value } = event.target;
//     this.setState({ value });
//   };
