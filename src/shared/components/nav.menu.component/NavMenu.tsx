import { Link } from 'react-router-dom';
import React from 'react';
import './NavMenu.css';

const NavMenu = () => {
  return (
    <div className="card-nav-menu">
      <nav>
        <ul>
          <li><Link>Home</Link></li>
          <li><Link>Service</Link></li>
          <li><Link>Reports</Link></li>
          <li><Link>Extra</Link></li>
          <li><Link>Log out</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
