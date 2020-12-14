import React from 'react';
import { Route, Switch } from 'react-router';
import * as RouteConstants from '../../constants/RouteConstants';
import MainMenuItems from '../../helpers/Sources/MainNavMenu';
import Test from '../Class/ClassTest';
import Home from '../Home/Home';
import NavMenu from '../NavMenu';
import Accounting from '../ServiceItems/Accounting/Accounting';
import SalesReport from '../ServiceItems/SalesReport/SalesReport';
import Services from '../Services';

const Main = () => {
  return (
    <div>
      <NavMenu menuItems={MainMenuItems} />
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

export default Main;
