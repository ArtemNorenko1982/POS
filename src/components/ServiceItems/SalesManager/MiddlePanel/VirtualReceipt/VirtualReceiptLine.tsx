/* eslint-disable react/prop-types */
import React from 'react';

const VirtualReceiptLine = ({
  index,
  itemTitle,
  itemProducer,
  price,
  quantity,
  total,
}) => {
  return (
    <div key={index}>
      <p>{index}</p>
      <p>{itemTitle}</p>
      <p>{itemProducer}</p>
      <p>{price}</p>
      <p>{quantity}</p>
      <p>{total}</p>
    </div>
  );
};

export default VirtualReceiptLine;
