import { Link } from 'react-router-dom';
import Header, { LogoDiv } from './MainNavigation.styled';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import { useNavigate } from 'react-router';

const MainNavigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogoutHandler = () => {
    dispatch(authActions.logout());
    navigate('/auth', { replace: true });
  };

  return (
    <Header>
      <Link to="/">
        <LogoDiv>React Auth</LogoDiv>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={onLogoutHandler}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </Header>
  );
};

export default MainNavigation;
