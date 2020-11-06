import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import Home from './shared/components/home.component/Home';
import Login from './shared/components/login.component/Login';
import UserService from './shared/services/UserService';

class App extends Component {
  userService = new UserService();

  detectRout() {
    let result = 
      <div className="App">
        <Home />
      </div>;

    if (!this.userService.isUserAuthorized()) {
      result = <div className="App"><Login /></div>;
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
