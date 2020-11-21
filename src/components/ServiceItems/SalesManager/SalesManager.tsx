import React from 'react';
import './SalesManager.scss';

const SalesManager = () => {
  return (
    <>
      <section className="sales-manager">
        <div className="top-panel">
          <input type="text" className="left-top-panel" />
          <div className="right-top-panel">55</div>
        </div>
        <div className="middle-panel">
          <div className="base-grid">
            <p style={{ backgroundColor: 'red' }}>1</p>
            <p style={{ backgroundColor: 'red' }}>2</p>
            <p style={{ backgroundColor: 'red' }}>3</p>
          </div>
          <div className="right-panel">33</div>
        </div>
        <div className="bottom-panel">
          <div className="left-bottom-panel">44</div>
          <div className="right-bottom-panel">55</div>
        </div>
      </section>
    </>
  );
};

export default SalesManager;
