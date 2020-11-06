import React, { Component } from 'react';
import UserService from '../../services/UserService';
import NavMenu from '../nav.menu.component/NavMenu';
import ServiceItems from '../service.items.component/ServiceItems';

class Home extends Component {

  userService: UserService;
 
  constructor(props) {
    super(props);
    this.userService = new UserService();
  }

  render() {
    return (
      <div>
        <NavMenu />
        <ServiceItems />
      </div>
    );
  }
}

export default Home;
