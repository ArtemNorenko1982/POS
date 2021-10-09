/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import BaseButton from '../Button';
import './MiddlePanel.scss';
import VirtualReceipt from './VirtualReceipt/index';

const products = [
  { itemTitle: 'Product', itemProducer: '', price: 3, quantity: 1, total: 3 },
];

const clickHandler = (event) => {};

const MiddlePanel = () => {
  return (
    <div className="base-panel">
      <div className="middle-panel">
        <div className="base-grid">
          <div className="base-grid-title">#</div>
          <div className="base-grid-title">Item</div>
          <div className="base-grid-title">Price</div>
          <div className="base-grid-title">Quantity</div>
          <div className="base-grid-title">Total</div>
        </div>
        {/* <VirtualReceipt goods={products} /> */}
        <div className="base-receipt-line">
          <div className="base-receipt-line-item">1</div>
          <div className="base-receipt-line-item">Product</div>
          <div className="base-receipt-line-item">3.00</div>
          <div className="base-receipt-line-item">1.000</div>
          <div className="base-receipt-line-item">3.00</div>
        </div>
        <div className="base-receipt-line">
          <div className="base-receipt-line-item">2</div>
          <div className="base-receipt-line-item">Product</div>
          <div className="base-receipt-line-item">3.00</div>
          <div className="base-receipt-line-item">1.000</div>
          <div className="base-receipt-line-item">3.00</div>
        </div>
        <div className="base-receipt-line">
          <div className="base-receipt-line-item">3</div>
          <div className="base-receipt-line-item">Product</div>
          <div className="base-receipt-line-item">3.00</div>
          <div className="base-receipt-line-item">1.000</div>
          <div className="base-receipt-line-item">3.00</div>
        </div>
        <div className="base-receipt-total">
          <div className="base-receipt-total-line">Total count:</div>
          <div className="base-receipt-total-line">3 pc</div>
          <div className="base-receipt-total-line">Total:</div>
          <div className="base-receipt-total-line">9.00$</div>
        </div>
      </div>
      <div className="right-panel">
        <BaseButton key="paidoutbutton" title="Paid-Out (Shift+F8)" />
        <BaseButton key="paidinbutton" title="Paid-In (Shift+F9)" />
      </div>
    </div>
  );
};

export default MiddlePanel;
