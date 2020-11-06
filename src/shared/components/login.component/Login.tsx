import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Login.css';
import * as RouteConstants from '../../../constants/RouteConstants';
import PasswordRecovery from '../password.recovery.component/PasswordRecovery';

class Login extends Component {

  doLogin() {
    this.alert('success');
  }

  render() {
    return (
      <div className="main-screen slide-in-blurred-top">
        <h1 className="welcome-title">Welcome to "Micro POS Pro"</h1>
        <form className="login" method="post">

          <img className="user-image" src='./img/ava-default.png' alt='' />
          <h3 className="login_title">Type your credentials or scan a badge</h3>
          <label htmlFor="Login" className="login-label">
            <input className="input-common login-input" id="Login" type="text" placeholder="User name or email" />
          </label>

          <label htmlFor="Password" className="login-label">
            <input className="input-common password-input" id="Password" type="password" placeholder="Password" />
          </label>

          <button type="button" className="login-button" onClick={this.doLogin}>Submit</button>
          <Link to={RouteConstants.PasswordRecoveryRoute} className="common-link">Forgot password</Link>
        </form>
        <Route path={RouteConstants.PasswordRecoveryRoute.path} component={PasswordRecovery} />
      </div>
    );
  }
}

export default Login;
