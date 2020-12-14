import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../helpers/Sources/Services';
import ServiceItem from '../ServiceItem/ServiceItem';
import './ServiceItems.scss';

const ServiceItems = () => {
  const serviceList = Services.map((item) => {
    return (
      <Link key={item.title} to={item.navPath} className="link-item">
        <ServiceItem title={item.title} src={item.src} />
      </Link>
    );
  });

  return (
    <div>
      <section className="service-items">{serviceList}</section>
    </div>
  );
};

export default ServiceItems;
