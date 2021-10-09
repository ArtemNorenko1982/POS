import * as RouteConstants from '../../constants/RouteConstants';
import NavMenuProps from '../Types/NavMenuProps';
import { dropUserToken } from '../UserService';

const MainMenuItems: NavMenuProps = {
  menuItems: [
    {
      title: 'Home',
      src: RouteConstants.HomeRoute.path,
      img: null,
      action: () => {},
    },
    {
      title: 'Services',
      src: RouteConstants.ServicesRoute.path,
      img: null,
      action: () => {},
    },
    {
      title: 'Reports',
      src: RouteConstants.ReportsRoute.path,
      img: null,
      action: () => {},
    },
    {
      title: 'Extra',
      src: RouteConstants.ExtraRoute.path,
      img: null,
      action: () => {},
    },
    {
      title: 'Log out',
      src: RouteConstants.LoginRoute.path,
      img: null,
      action: dropUserToken,
    },
  ],
};

export default MainMenuItems;
