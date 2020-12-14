import React, { useState } from 'react';
import IButton from '../../../../helpers/Types/Button';
import BaseButton from '../Button';
import './BottomPanel.scss';

// eslint-disable-next-line react-hooks/rules-of-hooks
// useState<Array<IButton>>([]);
// const buttons = [
//   { title: 'Sale', key: 'salekey' },
//   { title: '', key: 'key' },
//   { title: '', key: 'key' },
//   { title: '', key: 'key' },
//   { title: '', key: '' },
//   { title: '', key: '' },
//   { title: '', key: '' },
//   { title: '', key: '' },
//   { title: '', key: '' },
//   { title: '', key: '' },
//   { title: '', key: '' },
//   { title: '', key: '' },
//   { title: '', key: '' },
//   { title: '', key: '' },
// ];

// buttons.push({})

const BottomPanel = () => {
  return (
    <div className="base-panel bottom-panel">
      <div className="left-bottom-panel row">
        <BaseButton key="suspendbutton" title="Suspend (Shift+F4)" />
        <BaseButton key="resumebutton" title="Resume (Shift+F5)" />
        <BaseButton key="refundbutton" title="Refund (Ctrl+F5)" />
        <BaseButton key="salebutton" title="Sale (F5)" />
        <BaseButton key="clearbutton" title="Clear (Esc)" />
        <BaseButton key="xreport" title="X-Report (F7)" />
        <BaseButton key="weightbutton" title="Weight (F6)" />
      </div>
      <div className="right-bottom-panel">55</div>
    </div>
  );
};

export default BottomPanel;
