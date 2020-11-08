import { Link } from 'react-router-dom';
import React from 'react';
import './NavMenu.css';

const menuItems = ['Home', 'Service', 'Reports', 'Extra', 'Log out'];

const NavMenu = () => {
  const navMenuItems = Array.prototype.map.call(menuItems, (item) => {
    return <li><Link>{item}</Link></li>;
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
