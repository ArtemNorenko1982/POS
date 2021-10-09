import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as RouteConstants from '../../constants/RouteConstants';
import './App.scss';
import { AuthProvider } from '../../helpers/AuthProvider';
import Login from '../Login/Login';
import AuthRoute from '../../helpers/AuthRoute';
import Main from '../Main';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Route
            exact
            path={RouteConstants.LoginRoute.path}
            component={Login}
          />
          <AuthRoute path={RouteConstants.MainRoute.path} component={Main} />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
