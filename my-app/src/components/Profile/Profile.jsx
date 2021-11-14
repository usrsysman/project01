import React from "react";
import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {

    return <div>
        <ProfileInfo/>
        <MyPosts arrayDataPosts={props.state.PostsData}/>
    </div>
}

export default Profile;