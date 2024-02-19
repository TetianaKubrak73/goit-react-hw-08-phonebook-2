import { useSelector } from 'react-redux';
import { AuthNav } from './AuthNav/AuthNav';
import styles from './AppBar.module.css';
import NavMenu from 'components/AppBar/NavMenu/NavMenu';
import { UserMenu } from 'components/AppBar/UserMenu/UserMenu';
import { selectIsLogin } from '../../redux/auth/auth-selectors';

const AppBar = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <div className={styles.navbar}>
      <NavMenu />
      {isLogin ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
