const varADD_POSTS = 'ADD-POSTS';
const varUpdate_Posts = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case varADD_POSTS:
            state._addPosts();
            break;
        case varUpdate_Posts:
            state._updateTextPosts(action.textPosts);
            break;
    }
    return state;
}

export default profileReducer;


export const addPostsAction = () => {
    return {type: varADD_POSTS};
}

export const updateTextPostsAction = (text) => {
    return {type: varUpdate_Posts, textPosts: text};
}