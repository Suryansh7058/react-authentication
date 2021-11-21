import Form, { Control, Action } from './ProfileForm.styled';

const ProfileForm = () => {
  return (
    <Form>
      <Control>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" />
      </Control>
      <Action>
        <button>Change Password</button>
      </Action>
    </Form>
  );
};

export default ProfileForm;
