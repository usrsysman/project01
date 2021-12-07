const varADD_POSTS = 'ADD-POSTS';
const varUpdate_Posts = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    PostsData: [
        {id: 1, message: "... im sleep!"},
        {id: 2, message: "Hey. i'm write new post for you"},
        {id: 3, message: "Today i learning react. I no sleep!"},
        {id: 4, message: "Today Tomorrow Forever"}
    ],
    textPost: "text from state"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case varADD_POSTS: {
            let newPost = {
                id: 5, message: state.textPost
            };
            return {...state,
                PostsData: [...state.PostsData,newPost],
                textPost: ''};
            // stateCopy.PostsData = [...state.PostsData];
            // stateCopy.PostsData.push(newPost);
            // stateCopy.textPost = '';
            // state.PostsData.push(newPost);
            // state._addPosts();
        }
        case
        varUpdate_Posts: {
            return {...state,
            textPost: action.textPosts};
            // stateCopy.textPost = action.textPosts;
            // state.textPost = action.textPosts;
            // state._updateTextPosts(action.textPosts);
        }
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