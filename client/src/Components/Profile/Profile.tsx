import { useAppSelector } from "../../Hooks/redux";
import "./profile.scss";

const Profile = () => {
  const { currentUser } = useAppSelector((state) => state.userReducer);

  return <main>{currentUser?.username}</main>;
};

export default Profile;
