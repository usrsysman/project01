import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";

const varADD_POSTS = 'ADD-POSTS';
const varUpdate_Posts = 'UPDATE-NEW-POST-TEXT';
const varADD_Message = 'ADD-NEW-MESSAGES-TEXT';

let store = {
    _State: {
        profilePage: {
            PostsData: [
                {id: 1, message: "... im sleep!"},
                {id: 2, message: "Hey. i'm write new post for you"},
                {id: 3, message: "Today i learning react. I no sleep!"},
                {id: 4, message: "Today Tomorrow Forever"}
            ],
            textPost: "text from state"
        },
        dialogsPage: {
            DialogsData: [
                {
                    id: 1,
                    name: "Pew",
                    img: <img
                        src='https://media.istockphoto.com/vectors/man-avatar-profile-male-face-icon-vector-illustration-vector-id1142192538?k=20&m=1142192538&s=170667a&w=0&h=cH_E2fXLZAKKKKe6h4tqG4MCAI3T2F70TKMyKzLOWCo='/>
                },
                {
                    id: 2,
                    name: "Fedor",
                    img: <img src='http://balkansoulhostel.com/wp-content/uploads/2019/04/Male-Avatar-277081.png'/>
                },
                {
                    id: 3,
                    name: "lina",
                    img: <img src={'https://icon-library.com/images/profile-icon-vector/profile-icon-vector-25.jpg'}/>
                },
                {
                    id: 4,
                    name: "Katja",
                    img: <img
                        src={'https://cdn2.vectorstock.com/i/1000x1000/26/06/young-executive-woman-profile-icon-vector-9692606.jpg'}/>
                }
            ],
            MessagesData: [
                {id: 1, message: "polt?"},
                {id: 2, message: "he"},
                {id: 3, message: "Yo and two"},
                {id: 4, message: "good??"}
            ]
            // newTextMessages: "text from message"
        },
        sitebar: [
            {
                name: "Pew", img: <img
                    src='https://media.istockphoto.com/vectors/man-avatar-profile-male-face-icon-vector-illustration-vector-id1142192538?k=20&m=1142192538&s=170667a&w=0&h=cH_E2fXLZAKKKKe6h4tqG4MCAI3T2F70TKMyKzLOWCo='/>
            },
            {
                name: "Fedor",
                img: <img src='http://balkansoulhostel.com/wp-content/uploads/2019/04/Male-Avatar-277081.png'/>
            },
            {
                name: "lina",
                img: <img src={'https://icon-library.com/images/profile-icon-vector/profile-icon-vector-25.jpg'}/>
            },
            {id: 4, message: "Today Tomorrow Forever"}
        ]
    },
    getState() {
        return this._State;
    },
    _callSubscriber() {
        console.log('sdf');
    },
    _addPosts() {
        let newPost = {
            id: 5, message: this._State.profilePage.textPost
        };
        this._State.profilePage.PostsData.push(newPost);
        this._callSubscriber(this._State);
    },
    _addMessage(textMessage) {
        let newMessage = {
            id: 5, message: textMessage
        };
        this._State.dialogsPage.MessagesData.push(newMessage);
        this._callSubscriber(this._State);
    },
    _updateTextPosts(textPosts) {
        this._State.profilePage.textPost = textPosts;
        this._callSubscriber(this._State);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        profileReducer(this,action);
        dialogsReducer(this,action);
        sitebarReducer(this,action);
        // if (action.type === varADD_POSTS) {
        //     this._addPosts();
        // } else if (action.type === varUpdate_Posts) {
        //     this._updateTextPosts(action.textPosts);
        // } else if (action.type === varADD_Message) {
        //     this._addMessage(action.textMessage);
        // }
    }
}


window.store = store;


export default store;
