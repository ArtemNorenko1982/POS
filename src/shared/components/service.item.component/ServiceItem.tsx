import React from 'react';
import './ServiceItem.css';

const ServiceItem = (props) => {
  return (
    <article className="service-item">
      <img src={props.src} alt='' />
      <h2>{props.title}</h2>
    </article>
  );
};

export default ServiceItem;
