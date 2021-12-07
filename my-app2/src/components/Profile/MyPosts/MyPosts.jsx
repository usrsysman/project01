import React from 'react';
import p from "./MyPosts.module.css";
import Posts from "./Posts/Posts";
import {addPostsAction, updateTextPostsAction} from "../../Redux/profile-reducer";


const MyPosts = (props) => {
    let postsElements = props.arrayDataPosts.map((p) => {
        return <Posts message={p.message} likeCount={0}/>;
    })

    let NewPostsElement = React.createRef();

    let newPosts = () => {
        // let text = NewPostsElement.current.value;
        props.NewPosts();
        // props.dispatch(addPostsAction());
        // NewPostsElement.current.value = '';
    }

    let updateTextPosts = () => {
        let text = NewPostsElement.current.value;
        // let newVar = {type: 'UPDATE-NEW-POST-TEXT', textPosts: text};
        props.onUpdateTextPosts(text); //ctrl alt v
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
