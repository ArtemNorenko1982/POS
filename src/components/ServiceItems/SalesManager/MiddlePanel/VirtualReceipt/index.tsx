import React from 'react';
import VirtualReceiptLine from './VirtualReceiptLine';

// eslint-disable-next-line react/prop-types
const VirtualReceipt = ({ goods }) => {
  // eslint-disable-next-line react/prop-types
  const products = goods.map(
    (index, itemTitle, itemProducer, price, quantity, total) => {
      return VirtualReceiptLine({
        index,
        itemTitle,
        itemProducer,
        price,
        quantity,
        total,
      });
    }
  );
  return <>{products}</>;
};

export default VirtualReceipt;
