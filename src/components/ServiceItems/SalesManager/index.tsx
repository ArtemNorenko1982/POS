import React from 'react';
import TopPanel from './TopPanel';
import MiddlePanel from './MiddlePanel';
import './SalesManager.scss';
import BottomPanel from './BottomPanel';

const SalesManager = () => {
  return (
    <section className="sales-manager">
      <TopPanel />
      <MiddlePanel />
      <BottomPanel />
    </section>
  );
};

export default SalesManager;
