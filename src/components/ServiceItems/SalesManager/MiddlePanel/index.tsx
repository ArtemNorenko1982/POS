import React from 'react';
import BaseButton from '../Button';
import './MiddlePanel.scss';

const MiddlePanel = () => {
  return (
    <div className="base-panel middle-panel">
      <div className="base-grid">
        <ol>
          <li>N</li>
          <li>Item</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
        </ol>
        <p style={{ backgroundColor: 'blue', margin: 0, padding: 0 }}>
          Item #01
        </p>
        <p style={{ backgroundColor: '', margin: 0, padding: 0 }}>Item #02</p>
        <p style={{ backgroundColor: '', margin: 0, padding: 0 }}>Item #03</p>
      </div>
      <div className="right-panel">
        <BaseButton key="paidoutbutton" title="Paid-Out (Shift+F8)" />
        <BaseButton key="paidinbutton" title="Paid-In (Shift+F9)" />
      </div>
    </div>
  );
};

export default MiddlePanel;
