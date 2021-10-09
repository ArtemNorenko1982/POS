import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.scss';

type NavMenuItemProps = {
  title: string;
  src: string;
  action?: () => void;
};

const NavMenuItem: FC<NavMenuItemProps> = ({
  src = '',
  title = '',
  action = () => {},
}) => (
  <li>
    <Link to={src} onClick={action}>
      {title}
    </Link>
  </li>
);

export default NavMenuItem;
