import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';
import { selectUser } from '../../../redux/auth/auth-selectors';

import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());
  return (
    <div className={styles.wrap}>
      <p className={styles.text}>Welcome, {user.name}</p>
      <button onClick={onLogout} className={styles.logout_button}>
        Logout
      </button>
    </div>
  );
};
