import React, { useState } from 'react';
import './TopPanel.scss';

const TopPanel = () => {
  const [value, handleInput] = useState('');

  const inputHandler = (e) => {
    handleInput(e.target.value);
  };

  return (
    <div className="base-panel top-panel">
      <input
        type="text"
        className="left-top-panel"
        value={value}
        onChange={inputHandler}
      />
      <div className="right-top-panel">{value}</div>
    </div>
  );
};

export default TopPanel;
