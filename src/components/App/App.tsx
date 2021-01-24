import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.scss';
import Router from '../../helpers/Router';

class App extends Component {
  router = new Router();

  render() {
    const baseRoute = this.router.detectBaseUserRoute();
    const result = (
      <div className="App">
        <Route exect path={baseRoute.path} component={baseRoute.component} />
        <Redirect to={baseRoute.path} />
      </div>
    );
    return result;
  }
}

export default App;
