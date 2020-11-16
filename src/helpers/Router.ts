import Auth from './Auth';
import * as RouteConstants from '../constants/RouteConstants';
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';

class Router {
  userService = new Auth();

  detectBaseUserRoute() {
    const route = this.userService.isUserAuthorized()
      ? { path: RouteConstants.HomeRoute.path, component: Home }
      : { path: RouteConstants.LoginRoute.path, component: Login };

    return route;
  }
}

export default Router;
