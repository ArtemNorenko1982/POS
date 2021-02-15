import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import * as RouteConstants from '../../constants/RouteConstants';
import './App.scss';
import Router from '../../helpers/Router';
import { AuthProvider } from '../../helpers/AuthProvider';

class App extends Component {
  router = new Router();

  render() {
    const baseRoute = this.router.detectBaseUserRoute();
    const result = (
      <div className="App">
        <AuthProvider>
          <BrowserRouter>
            <Route
              path={RouteConstants.MainRoute.path}
              component={baseRoute.component}
              render={() => <Redirect to={baseRoute.path} />}
            />
            {/* <Redirect to={baseRoute.path} /> */}
          </BrowserRouter>
        </AuthProvider>
      </div>
    );
    return result;
  }
}

export default App;
