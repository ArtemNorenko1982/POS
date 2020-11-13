import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import '../../css/App.css';
import RouterService from '../services/RouterService';

class App extends Component {
  router = new RouterService();

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
