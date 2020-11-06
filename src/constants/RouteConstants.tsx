import Home from '../shared/components/home.component/Home';
// eslint-disable-next-line import/no-cycle
import Login from '../shared/components/login.component/Login';
import PasswordRecovery from '../shared/components/password.recovery.component/PasswordRecovery';

export const HomeRoute = { path:'/home', component: { Home } };
export const LoginRoute = { path:'/login', component: { Login } };
export const PasswordRecoveryRoute = { path:'/password-recovery', component: { PasswordRecovery } };
