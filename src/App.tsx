import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './css/App.css';
import UserService from './shared/services/UserService';
import * as RouteConstants from './constants/RouteConstants';

class App extends Component {
  userService = new UserService();

  detectRout() {
    let result = 
      <div className="App">
        <Route path={RouteConstants.LoginRoute.path} component={RouteConstants.LoginRoute.component} />
      </div>;

    if (!this.userService.isUserAuthorized()) {
      result =
        <div className="App">
          <Route path={RouteConstants.HomeRoute.path} component={RouteConstants.HomeRoute.component} />
        </div>;
    }

    return result;
  }

  render() {
    const result =
      <BrowserRouter>
        {this.detectRout()}
      </BrowserRouter>;
    return (result);
  }
}

export default App;
