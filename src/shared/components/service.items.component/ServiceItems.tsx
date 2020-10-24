import React, { Component } from 'react';
import ServiceItem from '../service.item.component/ServiceItem';
import './ServiceItems.css';

export default class ServiceItems extends Component {

    state = {
        services: [
            <ServiceItem title="Sales Manager" src="./img/coin.png"></ServiceItem>,
            <ServiceItem title="Sales" src="./img/shopping-cart.png"></ServiceItem>,
            <ServiceItem title="Sales Report" src="./img/piggy-bank.png"></ServiceItem>,
            <ServiceItem title="Lock" src="./img/hide.png"></ServiceItem>,
            <ServiceItem title="Accounting" src="./img/laptop.png"></ServiceItem>,
            <ServiceItem title="Catalogs" src="./img/book.png"></ServiceItem>,
            <ServiceItem title="Settings" src="./img/settings.png"></ServiceItem>,
            <ServiceItem title="Help" src="./img/speech-bubble.png"></ServiceItem>,
        ]
    }

    render() {

        let services = this.state.services;

        return (
            <section className="service-items">
                {services}
            </section>
        );
    }
}