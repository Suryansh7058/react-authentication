import { useState } from 'react';
import AuthSect, { Control, Actions, ToggleButton } from './AuthForm.styled';
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <AuthSect>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <Control>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required />
        </Control>
        <Control>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required />
        </Control>
        <Actions>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <ToggleButton type="button" onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </ToggleButton>
        </Actions>
      </form>
    </AuthSect>
  );
};

export default AuthForm;
