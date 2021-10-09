import React from 'react';
import { Switch } from 'react-router';
import * as RouteConstants from '../../constants/RouteConstants';
import AuthRoute from '../../helpers/AuthRoute';
import MainMenuItems from '../../helpers/Sources/MainNavMenu';
// import Test from '../Class/ClassTest';
import Home from '../Home/Home';
import NavMenu from '../NavMenu';
import Accounting from '../ServiceItems/Accounting/Accounting';
import SalesReport from '../ServiceItems/SalesReport/SalesReport';
import Services from '../Services';

const Main = () => {
  return (
    <div>
      <NavMenu menuItems={MainMenuItems.menuItems} />
      <Switch>
        <AuthRoute path={RouteConstants.HomeRoute.path} component={Home} />
        <AuthRoute
          path={RouteConstants.ServicesRoute.path}
          component={Services}
        />
        <AuthRoute
          path={RouteConstants.ReportsRoute.path}
          component={SalesReport}
        />
        <AuthRoute
          path={RouteConstants.ExtraRoute.path}
          component={Accounting}
        />
      </Switch>
    </div>
  );
};

export default Main;
