import React from 'react';
import NavMenuProps from '../../helpers/Types/NaMenuProps';
import NavMenuItem from '../NavMenuItem';

const NavMenu = ({ menuItems }: NavMenuProps) => {
  const navMenu = menuItems.map(({ src, title }) => {
    return <NavMenuItem key={title} src={src} title={title} />;
  });

  return (
    // TODO: take out to interface
    <div className="card-nav-menu">
      <nav>
        <ul>{navMenu}</ul>
      </nav>
    </div>
  );
};

export default NavMenu;
