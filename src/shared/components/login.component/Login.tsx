import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PasswordAvatar from '../../blocks/PasswordAvatar';
import UserAvatar from '../../blocks/UserAvatar';
import { PasswordRecovery } from '../password.recovery.component/PasswordRecovery';
import './Login.css'

export class Login extends Component {

    doLogin() {
        alert("success")
    }

    render() {
        return (
            <div className="main-screen slide-in-blurred-top">
                <h1 className="welcome-title">Welcome to "Micro POS Pro"</h1>
                <form className="login" method="post" >

                    <img className="user-image" src='./img/ava-default.png' />
                    <h3 className="login_title">Type your credentials or scan a badge</h3>
                    <label className="login-label">
                        <UserAvatar />
                        <input className="input-common login-input" id="Login" type="text" placeholder="User name or email" />
                    </label>

                    <label className="login-label">
                       <PasswordAvatar />
                        <input className="input-common password-input" id="Password" type="password" placeholder="Password" />
                    </label>

                    <button className="login-button" onClick={this.doLogin}>Submit</button>
                    <Link to="/password-recovery" className="common-link">Forgot password</Link>
                </form>
                <Route path="/password-recovery" component={PasswordRecovery} />
            </div >
        );
    }
}
