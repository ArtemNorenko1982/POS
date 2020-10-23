import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { PasswordRecoveryComponent } from '../password.recovery.component/password.recovery.component';

export class LoginComponent extends Component {

    doLogin() {
        alert("success")
    }

    render() {
        return (
            <BrowserRouter>
                <div className="row main-screen">

                    <form className="login" method="post" >

                        <h1 className="login_title">Hello!</h1>

                        <label>
                            <svg className="login_svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <g id="user-icon" transform="translate(-781 -540)">
                                    <g id="user_7_" data-name="user (7)" transform="translate(783.666 540)">
                                        <path id="Path_64" data-name="Path 64" d="M94.73,15.415a7.445,7.445,0,0,0,5.443-2.258,7.463,7.463,0,0,0,2.255-5.449,7.463,7.463,0,0,0-2.255-5.449,7.69,7.69,0,0,0-10.886,0,7.462,7.462,0,0,0-2.255,5.449,7.462,7.462,0,0,0,2.255,5.45A7.447,7.447,0,0,0,94.73,15.415ZM90.612,3.584a5.819,5.819,0,0,1,8.237,0,5.575,5.575,0,0,1,1.707,4.123,5.575,5.575,0,0,1-1.707,4.124,5.818,5.818,0,0,1-8.237,0A5.574,5.574,0,0,1,88.9,7.707a5.575,5.575,0,0,1,1.707-4.123Zm0,0" transform="translate(-81.599 0)" fill="#e2e2e2" />
                                        <path id="Path_65" data-name="Path 65" d="M26.6,256.465a19.056,19.056,0,0,0-.259-2.022,15.945,15.945,0,0,0-.5-2.033,10.05,10.05,0,0,0-.835-1.9,7.146,7.146,0,0,0-1.259-1.642,5.548,5.548,0,0,0-1.808-1.137,6.243,6.243,0,0,0-2.308-.418,2.341,2.341,0,0,0-1.251.531c-.375.245-.814.528-1.3.841a7.466,7.466,0,0,1-1.686.744,6.542,6.542,0,0,1-4.126,0,7.44,7.44,0,0,1-1.685-.744c-.485-.31-.924-.593-1.3-.842a2.339,2.339,0,0,0-1.251-.531,6.235,6.235,0,0,0-2.308.419,5.543,5.543,0,0,0-1.808,1.137,7.147,7.147,0,0,0-1.258,1.642,10.067,10.067,0,0,0-.835,1.9,15.982,15.982,0,0,0-.5,2.033,18.927,18.927,0,0,0-.259,2.023c-.042.611-.064,1.247-.064,1.89a5.317,5.317,0,0,0,1.576,4.02,5.67,5.67,0,0,0,4.062,1.483h15.39a5.671,5.671,0,0,0,4.062-1.483,5.315,5.315,0,0,0,1.577-4.02c0-.645-.022-1.281-.065-1.89Zm-2.8,4.552a3.818,3.818,0,0,1-2.77.967H5.638a3.818,3.818,0,0,1-2.77-.966,3.472,3.472,0,0,1-.995-2.662c0-.6.02-1.192.059-1.76a17.072,17.072,0,0,1,.234-1.821,14.1,14.1,0,0,1,.437-1.792,8.2,8.2,0,0,1,.679-1.542,5.3,5.3,0,0,1,.925-1.214,3.681,3.681,0,0,1,1.2-.749,4.306,4.306,0,0,1,1.475-.285c.066.035.182.1.372.225.385.251.829.538,1.319.852a9.273,9.273,0,0,0,2.117.947,8.411,8.411,0,0,0,5.278,0,9.286,9.286,0,0,0,2.118-.948c.5-.321.933-.6,1.319-.851.189-.123.306-.19.372-.225a4.309,4.309,0,0,1,1.476.285,3.686,3.686,0,0,1,1.2.749,5.283,5.283,0,0,1,.925,1.214,8.169,8.169,0,0,1,.68,1.541,14.065,14.065,0,0,1,.437,1.792,17.216,17.216,0,0,1,.234,1.822h0c.04.566.06,1.158.06,1.759a3.472,3.472,0,0,1-.995,2.661Zm0,0" transform="translate(0 -231.859)" fill="#e2e2e2" />
                                    </g>
                                </g>
                            </svg>
                            <input className="input-common login-input" id="Login" type="text" placeholder="User name or email" />
                        </label>

                        <label>
                            <svg className="login_svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect id="Rectangle_59" data-name="Rectangle 59" width="32" height="32" transform="translate(781 540)" fill="#e2e2e2" />
                                    </clipPath>
                                </defs>
                                <g id="pasw-icon" transform="translate(-781 -540)">
                                    <g id="Mask_Group_9" data-name="Mask Group 9" clip-path="url(#clip-path)">
                                        <path id="keywords" d="M31.664,21.95a1.148,1.148,0,0,0-1.623,0l-4.582,4.582-2.143-2.143,3.234-3.234a1.148,1.148,0,0,0-1.623-1.623l-3.234,3.234-6.8-6.795a8.283,8.283,0,1,0-6.612,3.3h0a8.221,8.221,0,0,0,4.99-1.672l7.6,7.6,0,0,0,0,3.763,3.762a1.148,1.148,0,0,0,1.623,0l5.394-5.394A1.147,1.147,0,0,0,31.664,21.95ZM8.285,16.972a5.99,5.99,0,1,1,4.236-1.755,5.95,5.95,0,0,1-4.236,1.755Z" transform="translate(781 540)" fill="#e2e2e2" />
                                    </g>
                                </g>
                            </svg>
                            <input className="input-common password-input" id="Password" type="password" placeholder="Password" />
                        </label>

                        <input type="checkbox" value="Remember me" />
                        <button className="common-button full-width" onClick={this.doLogin}>Enter</button>
                        <Link to="password-recovery" className="common-link full-width" component={PasswordRecoveryComponent}>Forgot password</Link>
                    </form>
                    <Route path="password-recovery" component={PasswordRecoveryComponent} />
                </div >
            </BrowserRouter>
        );
    }
}
