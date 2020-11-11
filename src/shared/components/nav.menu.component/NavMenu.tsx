import { Link } from 'react-router-dom';
import React from 'react';
import './NavMenu.css';

const menuItems = ['Home', 'Service', 'Reports', 'Extra', 'Log out'];

const NavMenu = () => {
  const navMenuItems = menuItems.map((item, index) => {
    return <li key={item}>{item}</li>;
  });
  return (
    <div className="card-nav-menu">
      <nav>
        <ul>
          {navMenuItems}
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
