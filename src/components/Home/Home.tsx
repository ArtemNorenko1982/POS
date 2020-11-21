import React from 'react';
import { Route, Switch } from 'react-router';

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
  return <div>Home dashboard</div>;
};

export default Home;
