import React from 'react';
import p from "./MyPosts.module.css";
import Posts from "./Posts/Posts";
import {addPostsAction, updateTextPostsAction} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addMessageAction} from "../../Redux/dialogs-reducer";


// const MyPostsContainer = (props) => {
//     // let state = props.state.getState();
//
//     let NewPosts = () => {
//         // let text = NewPostsElement.current.value;
//         props.store.dispatch(addPostsAction());
//         // NewPostsElement.current.value = '';
//     }
//
//     let onUpdateTextPosts = (text) => {
//         let newText = updateTextPostsAction(text);
//         // let newVar = {type: 'UPDATE-NEW-POST-TEXT', textPosts: text};
//         props.store.dispatch(newText); //ctrl alt v
//     }
//
//     return (
//         <MyPosts NewPosts={NewPosts}
//                  onUpdateTextPosts={onUpdateTextPosts}
//                  arrayDataPosts={props.store.state.profilePage.PostsData}
//                  newPostsText={props.store.state.profilePage.textPost}
//                  // dispatch={props.store.dispatch}
//         />
//
//     );
// };

let mapStateToProps = (state) => {
    return {
        arrayDataPosts: state.profilePage.PostsData,
        newPostsText: state.profilePage.textPost
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateTextPosts: (text) => {
            let newText = updateTextPostsAction(text);
            dispatch(newText);
        },
        NewPosts: () => {
            dispatch(addPostsAction());
        }
    }
};


const superMyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default superMyPostsContainer;
