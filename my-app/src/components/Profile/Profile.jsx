import React from "react";
import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {addPosts} from "../Redux/State";

const Profile = (props) => {

    return <div>
        <ProfileInfo/>
        <MyPosts arrayDataPosts={props.state.PostsData} newPostsText={props.textPost} addPosts={props.addPosts} updateTextPosts={props.updateTextPosts}/>
    </div>
}

export default Profile;