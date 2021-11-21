import { Link } from 'react-router-dom';
import Header, { LogoDiv } from './MainNavigation.styled';

const MainNavigation = () => {
  return (
    <Header>
      <Link to="/">
        <LogoDiv>React Auth</LogoDiv>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default MainNavigation;
