import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { current } from '../redux/auth/auth-operations';

const Home = lazy(() => import('../Pages/Home/Home'));
const Register = lazy(() => import('../Pages/Register'));
const Login = lazy(() => import('../Pages/Login'));
const Contacts = lazy(() => import('../Pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route path="register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
