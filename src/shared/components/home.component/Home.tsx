import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { CurentUser, Token } from "../../../constants/LocalStorageUnits";
import { isNull } from "../../../utils/utils";
import { UserService } from "../../services/UserService";
import NavMenu from "../nav.menu.component/NavMenu";
import ServiceItems from '../service.items.component/ServiceItems'

export default class Home extends Component {

    userService: UserService;
    constructor(props) {
        super(props);
        this.userService = new UserService();
    }

    navigateToLogIn() {

    }

    render() {
        return (
            <div>
                <NavMenu></NavMenu>
                <ServiceItems></ServiceItems>
            </div>
        );
    }
}