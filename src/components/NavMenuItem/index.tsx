import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.scss';

const NavMenuItem = ({ src = '' as string, title = '' as string }) => {
  return (
    <li>
      <Link to={src}>{title}</Link>
    </li>
  );
};

export default NavMenuItem;
