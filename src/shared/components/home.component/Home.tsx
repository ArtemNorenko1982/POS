import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { CurentUser, Token } from "../../../constants/LocalStorageUnits";
import { isNull } from "../../../utils/utils";
import { UserService } from "../../services/UserService";

export default class Home extends Component {

    userService: UserService;
    constructor(props) {
        super(props);
        this.userService = new UserService();
    }

    isUserAuthorized(): boolean {
        return !isNull(localStorage.getItem(Token));
    }

    getUserName(): string {
        return `${localStorage.getItem(CurentUser)}`;
    }

    navigateToLogIn() {

    }

    render() {
        var result =
            <div>
                <h1>Please authorize</h1>
                <button onClick={this.navigateToLogIn}>Authorize</button>
            </div>
        if (this.isUserAuthorized()) {
            result =
                <div>
                    <h1>Hello {this.getUserName}</h1>
                    <button onClick={this.userService.logout}>Log out</button>
                </div>

        }

        return (result);
    }
}