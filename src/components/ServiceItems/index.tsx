import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../helpers/Sources/Services';
import ServiceItem from '../ServiceItem/ServiceItem';
import './ServiceItems.scss';

const ServiceItems = () => {
  const serviceItems = Services.map(({ title, navPath, src }) => {
    return (
      <Link key={title} to={navPath} className="link-item">
        <ServiceItem title={title} src={src} />
      </Link>
    );
  });

  return (
    <div>
      <section className="service-items">{serviceItems}</section>
    </div>
  );
};

export default ServiceItems;
