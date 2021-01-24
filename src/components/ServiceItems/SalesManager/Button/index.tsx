import React from 'react';
import './BaseButton.scss';

// eslint-disable-next-line react/prop-types
const BaseButton = ({ title }) => {
  return (
    <div className="column">
      <div className="card">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default BaseButton;
