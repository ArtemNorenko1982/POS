import React from 'react';
import buttons from '../../../../helpers/Sources/ButtonDescription';
import BaseButton from '../Button';
import './BottomPanel.scss';

const BottomPanel = () => {
  const buttonList = buttons.map(({ key, title }) => {
    return <BaseButton key={key} title={title} />;
  });
  return (
    <div className="base-panel bottom-panel">
      <div className="left-bottom-panel row">{buttonList}</div>
      <div className="right-bottom-panel">55</div>
    </div>
  );
};

export default BottomPanel;
