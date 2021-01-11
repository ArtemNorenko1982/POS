import React from 'react';
import './ServiceItem.css';

// eslint-disable-next-line react/prop-types
const ServiceItem = ({ title, src }) => {
  return (
    <article className="service-item">
      <img src={src} alt="" />
      <h2>{title}</h2>
    </article>
  );
};

export default ServiceItem;
