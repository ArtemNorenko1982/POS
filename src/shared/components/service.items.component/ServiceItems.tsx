import React, { Component } from 'react';
import ServiceItem from '../service.item.component/ServiceItem';
import './ServiceItems.css';

class ServiceItems extends Component {

  services = [
    <ServiceItem key="1" title="Sales Manager" src="./img/coin.png" />,
    <ServiceItem key="2" title="Sales" src="./img/shopping-cart.png" />,
    <ServiceItem key="3" title="Sales Report" src="./img/piggy-bank.png" />,
    <ServiceItem key="4" title="Lock" src="./img/hide.png" />,
    <ServiceItem key="5" title="Accounting" src="./img/laptop.png" />,
    <ServiceItem key="6" title="Catalogs" src="./img/book.png" />,
    <ServiceItem key="7" title="Settings" src="./img/settings.png" />,
    <ServiceItem key="8" title="Help" src="./img/speech-bubble.png" />,
  ];
  

  render() {
    return (
      <section className="service-items">
        {this.services}
      </section>
    );
  }
}

export default ServiceItems;
