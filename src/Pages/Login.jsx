import { useSelector, useDispatch } from 'react-redux';
import {
  selectAuthError,
  selectAuthLoading,
} from '../redux/auth/auth-selectors';
import { login } from '../redux/auth/auth-operations';
import LoginForm from '../components/LoginForm/LoginForm';

import Loader from 'components/Loader/Loader';

const Login = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };
  return (
    <div>
      <h2>Login</h2>
      {authLoading && <Loader />}
      <LoginForm onSubmit={handleLogin} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </div>
  );
};
export default Login;
