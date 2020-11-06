import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './css/App.css';
import UserService from '../services/UserService';
import * as RouteConstants from '../../constants/RouteConstants';
import Login from './login.component/Login';
import Home from './home.component/Home';

class App extends Component {
  userService = new UserService();

  detectRout() {
    let result = 
      <div className="App">
        <Route path={RouteConstants.LoginRoute.path} component={Login} />
      </div>;

    if (!this.userService.isUserAuthorized()) {
      result =
        <div className="App">
          <Route path={RouteConstants.HomeRoute.path} component={Home} />
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
