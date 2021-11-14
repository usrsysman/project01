import React from "react";
import p from "./MyPosts.module.css";

import Posts from "./Posts/Posts";

const MyPosts = (props) => {

    let postsElements = props.arrayDataPosts.map((p) => {
        return <Posts message={p.message} likeCount={0}/>;
    })

    return (
        <div className={p.MyPostsBlock}>
            <h4>My posts</h4>
            <div>
                <div>
                    <textarea name="" id="" cols="60" rows="10"></textarea>
                </div>
                <button>Add new post</button>
            </div>
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
