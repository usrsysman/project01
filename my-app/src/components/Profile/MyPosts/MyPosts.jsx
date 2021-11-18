import React from 'react';
import p from "./MyPosts.module.css";
import Posts from "./Posts/Posts";
import {updateTextPosts} from "../../Redux/State";


const MyPosts = (props) => {

    let postsElements = props.arrayDataPosts.map((p) => {
        return <Posts message={p.message} likeCount={0}/>;
    })

    let NewPostsElement = React.createRef();

    let newPosts = () => {
        // let text = NewPostsElement.current.value;
        props.addPosts();
        NewPostsElement.current.value = '';
        // props.updateTextPosts('');
    }

    let updateTextPosts = () => {
        let text = NewPostsElement.current.value;
        props.updateTextPosts(text);
    }

    return (
        <div className={p.MyPostsBlock}>
            <h4>My posts</h4>
            <div>
                <div>
                    <textarea onChange={updateTextPosts} ref={NewPostsElement} value={props.newPostsText} cols="60" rows="6"></textarea>
                </div>
                <button onClick={newPosts}>Add new post</button>
            </div>
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
