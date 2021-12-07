import React from "react";
import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";
import {addPosts} from "../Redux/Store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer  store={props}/>
        {/*<MyPosts arrayDataPosts={props.state.PostsData} newPostsText={props.textPost} dispatch={props.dispatch} />*/}
    </div>
}

export default Profile;