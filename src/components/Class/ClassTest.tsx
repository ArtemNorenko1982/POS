import React, { useState } from 'react';

const Test = () => {
  const [value, stateOnChange] = useState('');
  // eslint-disable-next-line react/state-in-constructor
  //   state = { value: '' };

  //   stateOnChange = (event) => {
  //     const { value } = event.target;
  //     this.setState({ value });
  //   };

  return (
    <div>
      <input
        type="input"
        // eslint-disable-next-line react/destructuring-assignment
        value={value}
        onChange={(event) => stateOnChange(event.target.value)}
      />
      <input type="button" name="button" />
    </div>
  );
};

export default Test;
