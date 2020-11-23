import React from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from '../ServiceItem/ServiceItem';
import './ServiceItems.scss';
import * as RouteConstants from '../../constants/RouteConstants';

const services = [
  {
    title: 'Sales Manager',
    src: './img/coin.png',
    navPath: RouteConstants.SalesManagerRoute.path,
  },
  {
    title: 'Sales',
    src: './img/shopping-cart.png',
    navPath: RouteConstants.SalesRoute.path,
  },
  {
    title: 'Sales Report',
    src: './img/piggy-bank.png',
    navPath: RouteConstants.SalesReportRoute.path,
  },
  {
    title: 'Lock',
    src: './img/hide.png',
    navPath: RouteConstants.LoginRoute.path,
  },
  {
    title: 'Accounting',
    src: './img/laptop.png',
    navPath: RouteConstants.AccountingRoute.path,
  },
  {
    title: 'Catalogs',
    src: './img/book.png',
    navPath: RouteConstants.CatalogsRoute.path,
  },
  {
    title: 'Settings',
    src: './img/settings.png',
    navPath: RouteConstants.SettingsRoute.path,
  },
  {
    title: 'Help',
    src: './img/speech-bubble.png',
    navPath: RouteConstants.HelpRoute.path,
  },
];

const ServiceItems = () => {
  const serviceList = services.map((item) => {
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
