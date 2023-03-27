import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPost from "../../components/AddPost/AddPost";
import { getProfile } from "../../redux/actions/authActions";
import { getPost } from "../../redux/actions/postActions";

const Profile = () => {
  const dispatch = useDispatch();
  const profUser = useSelector((state) => state.authReducer.user);
  const loader = useSelector((state) => state.authReducer.isLoading);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://img.freepik.com/photos-gratuite/ombres-naturelles-abstraites_23-2149054672.jpg?size=626&ext=jpg&ga=GA1.2.1361125925.1677837468&semt=ais')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <h1 className="addposthere">. </h1>
        <h1 className="mop">Add Design Here : </h1>
        <AddPost></AddPost>
        <h1 className="mopo">. </h1>
        <h1 className="mopo">. </h1>
      </div>
    </>
  );
};

export default Profile;
