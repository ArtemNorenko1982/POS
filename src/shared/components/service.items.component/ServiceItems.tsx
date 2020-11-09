import React from 'react';
import ServiceItem from '../service.item.component/ServiceItem';
import './ServiceItems.css';

const services = [
  { title: 'Sales Manager', src: './img/coin.png' },
  { title: 'Sales', src: './img/shopping-cart.png' },
  { title: 'Sales Report', src: './img/piggy-bank.png' },
  { title: 'Lock', src: './img/hide.png' },
  { title: 'Accounting', src: './img/laptop.png' },
  { title: 'Catalogs', src: './img/book.png' },
  { title: 'Settings', src: './img/settings.png' },
  { title: 'Help', src: './img/speech-bubble.png' },
];

const ServiceItems = () => {
    
  const serviceList = services.map((item, index) =>{
    return <ServiceItem key={index} title={item.title} src={item.src} />;
  });

  return (
    <section className='service-items'>
      {serviceList}
    </section>
  );
};

export default ServiceItems;
