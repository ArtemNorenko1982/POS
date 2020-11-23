import React from 'react';
import { Route, Switch } from 'react-router';
import * as RouteConstants from '../../constants/RouteConstants';
import ServiceItems from '../ServiceItems';
import Accounting from '../ServiceItems/Accounting/Accounting';
import Catalogs from '../ServiceItems/Catalogs/Catalogs';
import Help from '../ServiceItems/Help/Help';
import Sales from '../ServiceItems/Sales/Sales';
import SalesManager from '../ServiceItems/SalesManager';
import SalesReport from '../ServiceItems/SalesReport/SalesReport';
import Settings from '../ServiceItems/Settings/Settings';

const Services = () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path={RouteConstants.ServicesRoute.path}
          component={ServiceItems}
        />
        <Route
          path={RouteConstants.SalesManagerRoute.path}
          component={SalesManager}
        />
        <Route path={RouteConstants.SalesRoute.path} component={Sales} />
        <Route
          path={RouteConstants.SalesReportRoute.path}
          component={SalesReport}
        />
        <Route
          path={RouteConstants.AccountingRoute.path}
          component={Accounting}
        />
        <Route path={RouteConstants.CatalogsRoute.path} component={Catalogs} />
        <Route path={RouteConstants.SettingsRoute.path} component={Settings} />
        <Route path={RouteConstants.HelpRoute.path} component={Help} />
      </Switch>
    </div>
  );
};

export default Services;
