import { useState } from 'react';
import AuthSect, {
  Control,
  Actions,
  ToggleButton,
  Button,
} from './AuthForm.styled';
import axios from 'axios';
import { authActions } from '../../store/auth-slice';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

const API_KEY = 'AIzaSyA3eYenhn5H3ogLvWk8Zp44EPuqMDiallk';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const pwdChangeHandler = (event) => {
    setPwd(event.target.value);
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    setError(null);
    setSuccess(null);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    }
    try {
      const res = await axios.post(url, {
        email: email,
        password: pwd,
        returnSecureToken: true,
      });

      const data = res.data;
      console.log(data);
      if (isLogin) {
        setSuccess('Logged In Successfully!!!');
      } else {
        setSuccess('Account Created Successfully!!!');
      }
      dispatch(authActions.login({ token: data.idToken }));
    } catch (error) {
      if (error) {
        setError(error.response.data.error.message);
      }
    }
    setIsLoading(false);
    setEmail('');
    setPwd('');
    setTimeout(() => {
      navigate('/profile', { replace: true });
    }, 500);
  };

  return (
    <AuthSect>
      {success && <h1 style={{ color: '#39FF14' }}>{success}</h1>}
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <Control>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={emailChangeHandler}
            onFocus={() => {
              setError(null);
              setSuccess(null);
            }}
          />
        </Control>
        <Control>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            value={pwd}
            onChange={pwdChangeHandler}
            onFocus={() => {
              setError(null);
              setSuccess(null);
            }}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </Control>
        <Actions>
          {!isLoading && (
            <Button type="submit">
              {isLogin ? 'Login' : 'Create Account'}
            </Button>
          )}
          {isLoading && <p style={{ color: 'white' }}>Sending Request...</p>}
          <ToggleButton type="button" onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </ToggleButton>
        </Actions>
      </form>
    </AuthSect>
  );
};

export default AuthForm;
