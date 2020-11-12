import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import '../../css/App.css';
import UserService from '../services/UserService';
import * as RouteConstants from '../../constants/RouteConstants';
import Login from './login.component/Login';
import Home from './home.component/Home';

class App extends Component {
  userService = new UserService();

  detectRout() {
    const isAuthorized = true;
    // this.userService.isUserAuthorized();
    return (
      <div className="App">
        <Route
          path={
            !isAuthorized
              ? RouteConstants.LoginRoute.path
              : RouteConstants.HomeRoute.path
          }
          component={!isAuthorized ? Login : Home}
        />
      </div>
    );
  }

  render() {
    const result = <BrowserRouter>{this.detectRout()}</BrowserRouter>;
    return result;
  }
}

export default App;
