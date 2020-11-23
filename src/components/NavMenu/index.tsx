import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.scss';
import { Route, Switch } from 'react-router';

import Accounting from '../ServiceItems/Accounting/Accounting';
import SalesReport from '../ServiceItems/SalesReport/SalesReport';
import * as RouteConstants from '../../constants/RouteConstants';
import Home from '../Home/Home';
import Services from '../Services';

const menuItems = [
  { title: 'Home', navPath: RouteConstants.HomeRoute.path },
  { title: 'Services', navPath: RouteConstants.ServicesRoute.path },
  { title: 'Reports', navPath: RouteConstants.ReportsRoute.path },
  { title: 'Extra', navPath: RouteConstants.ExtraRoute.path },
  { title: 'Log out', navPath: '' },
];

const NavMenu = () => {
  const navMenuItems = menuItems.map((item) => {
    return (
      <li key={item.title}>
        <Link to={item.navPath}>{item.title}</Link>
      </li>
    );
  });
  return (
    <div className="card-nav-menu">
      <nav>
        <ul>{navMenuItems}</ul>
      </nav>
      <Switch>
        <Route path={RouteConstants.HomeRoute.path} component={Home} />
        <Route path={RouteConstants.ServicesRoute.path} component={Services} />
        <Route
          path={RouteConstants.ReportsRoute.path}
          component={SalesReport}
        />
        <Route path={RouteConstants.ExtraRoute.path} component={Accounting} />
      </Switch>
    </div>
  );
};

export default NavMenu;
