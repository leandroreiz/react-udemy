import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const headerContent = isAuthenticated ? (
    <ul>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
  ) : (
    ''
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>{headerContent}</nav>
    </header>
  );
};

export default Header;
