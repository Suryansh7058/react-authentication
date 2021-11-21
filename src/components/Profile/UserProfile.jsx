import ProfileForm from './ProfileForm';
import ProfileSection from './UserProfile.styled';
const UserProfile = () => {
  return (
    <ProfileSection>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </ProfileSection>
  );
};

export default UserProfile;
