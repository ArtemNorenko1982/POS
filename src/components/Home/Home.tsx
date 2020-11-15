import React from 'react';
import { Route, Switch } from 'react-router';
import NavMenu from '../NavMenu/NavMenu';
import Accounting from '../ServiceItems/Accounting/Accounting';
import Catalogs from '../ServiceItems/Catalogs/Catalogs';
import Help from '../ServiceItems/Help/Help';
import Sales from '../ServiceItems/Sales/Sales';
import SalesManager from '../ServiceItems/SalesManager/SalesManager';
import SalesReport from '../ServiceItems/SalesReport/SalesReport';
import ServiceItems from '../ServiceItems/ServiceItems';
import Settings from '../ServiceItems/Settings/Settings';
import * as RouteConstants from '../../constants/RouteConstants';

const Home = () => {
  return (
    <div>
      <NavMenu />
      <ServiceItems />
      <Switch>
        <Route
          exact
          path={RouteConstants.SalesManagerRoute.path}
          component={SalesManager}
        />
        <Route exact path={RouteConstants.SalesRoute.path} component={Sales} />
        <Route
          exact
          path={RouteConstants.SalesReportRoute.path}
          component={SalesReport}
        />
        <Route
          exact
          path={RouteConstants.AccountingRoute.path}
          component={Accounting}
        />
        <Route
          exact
          path={RouteConstants.CatalogsRoute.path}
          component={Catalogs}
        />
        <Route
          exact
          path={RouteConstants.SettingsRoute.path}
          component={Settings}
        />
        <Route exact path={RouteConstants.HelpRoute.path} component={Help} />
      </Switch>
    </div>
  );
};

export default Home;
