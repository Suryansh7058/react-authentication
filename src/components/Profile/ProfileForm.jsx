import { useRef, useState } from 'react';
import Form, { Control, Action } from './ProfileForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { authActions } from '../../store/auth-slice';

const API_KEY = 'AIzaSyA3eYenhn5H3ogLvWk8Zp44EPuqMDiallk';

const ProfileForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const dispatch = useDispatch();
  const newPasswordRef = useRef();

  const token = useSelector((state) => state.auth.token);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredPassword = newPasswordRef.current.value;

    try {
      const res = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
        {
          idToken: token,
          password: enteredPassword,
          returnSecureToken: false,
        }
      );
      const data = res.data;
      console.log(data);
      setSuccess('Password Changed SuccessFully!!!');
      dispatch(authActions.login({ token: data.idToken }));
    } catch (error) {
      if (error) {
        setError(error.response.data.error.message);
      }
    }
    setIsLoading(false);
  };
  return (
    <>
      {error && <h3 style={{ color: 'red' }}>{error}</h3>}
      {success && <h3 style={{ color: '#39FF14' }}>{success}</h3>}
      <Form onSubmit={submitHandler}>
        <Control>
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            onFocus={() => {
              setError(null);
              setSuccess(null);
            }}
            ref={newPasswordRef}
          />
        </Control>
        <Action>
          {isLoading && <p>Updating Password</p>}
          {!isLoading && <button type="submit">Change Password</button>}
        </Action>
      </Form>
    </>
  );
};

export default ProfileForm;
