import React, { useEffect, useState } from "react";
import { FcUndo } from "react-icons/fc";
import { useDispatch } from "react-redux";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
import { getUser } from "../../services/authService";
import "./Profile.scss";
import { SppinerImg } from "../../components/loader/Loader";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";

const Profile = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    console.log("Getting use");
    setIsLoading(true);
    async function getUserData() {
      const data = await getUser();
      console.log(data);

      setProfile(data);
      setIsLoading(false);
      await dispatch(SET_USER(data));
      await dispatch(SET_NAME(data.name));
    }
    getUserData();
  }, [dispatch]); 

  return <div className="profile --my2">
    {isLoading && <SppinerImg/> }
    <>
    {!isLoading && profile === null  ? (
        <p> Something went wrong , please Relaod page...</p>
    ):(
      <Card cardClass={"card --flex-dir-column"}>
        <span className="profile-photo">
          <img src={profile?.photo} alt="Profile-pic" />
        </span>
        <span className="profile_data">
          <p>
            <b> Name : </b>{profile?.name}
          </p>
          <p>
            <b> Email : </b>{profile?.email}
          </p>
          <p>
            <b> Phone : </b>{profile?.phone}
          </p>
          <p>
            <b> bio : </b>{profile?.bio}
          </p>
          <div>
            <Link to="/edit-profile">
              <button className="--btn --btn-primary"> Edit Profile</button>
            </Link>
          </div>
          
        </span>
         </Card>
    )}
    </>
  </div>;
};

export default Profile;
