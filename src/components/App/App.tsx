import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import Router from '../../helpers/Router';

class App extends Component {
  router = new Router();

  render() {
    const baseRoute = this.router.detectBaseUserRoute();
    const result = (
      <BrowserRouter>
        <div className="App">
          <Route path={baseRoute.path} component={baseRoute.component} />
          <Redirect to={baseRoute.path} />
        </div>
      </BrowserRouter>
    );
    return result;
  }
}

export default App;
