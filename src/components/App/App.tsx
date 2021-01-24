import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.scss';
import Router from '../../helpers/Router';
import { AuthProvider } from '../../helpers/Auth';

class App extends Component {
  router = new Router();

  render() {
    const baseRoute = this.router.detectBaseUserRoute();
    const result = (
      <div className="App">
        <AuthProvider>
          <Route exect path={baseRoute.path} component={baseRoute.component} />
          <Redirect to={baseRoute.path} />
        </AuthProvider>
      </div>
    );
    return result;
  }
}

export default App;
