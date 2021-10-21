import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Login.scss';

import * as RouteConstants from '../../constants/RouteConstants';
import PasswordRecovery from '../PasswordRecovery/PasswordRecovery';
import useForm from '../../utils/Hooks/LoginHooks';
import IUserState from '../../helpers/Types/UserState';

const Login = (props) => {
  const { onChange, onSubmit, values } = useForm(props, {
    userName: '',
    password: '',
  });

  return (
    <div className="main-screen slide-in-blurred-top">
      <form className="login" onSubmit={onSubmit} noValidate>
        <div className="left-part">
          <div>
            <h3>MicroPOS Pro ver #1.0</h3>
          </div>
          <div>
            <img className="app-image" src="./img/shopping-cart.png" alt="" />
          </div>
        </div>
        <div className="vertical-line" />
        <div className="right-part">
          <img className="user-image" src="./img/ava-default.png" alt="" />
          <h3 className="login-title">Authorization</h3>
          <label htmlFor="Login" className="login-label">
            <input
              className="input-common login-input"
              id="Login"
              type="text"
              placeholder="User name or email"
              name="userName"
              value={(values as IUserState).userName}
              onChange={onChange}
            />
          </label>

          <label htmlFor="Password" className="login-label">
            <input
              className="input-common password-input"
              id="Password"
              type="password"
              placeholder="Password"
              name="password"
              value={(values as IUserState).password}
              onChange={onChange}
            />
          </label>

          <button type="submit" className="login-button">
            Submit
          </button>
          <Link
            to={RouteConstants.PasswordRecoveryRoute.path}
            className="common-link"
          >
            Forgot password
          </Link>
        </div>
      </form>
      <Route
        path={RouteConstants.PasswordRecoveryRoute.path}
        component={PasswordRecovery}
      />
    </div>
  );
};

export default Login;
