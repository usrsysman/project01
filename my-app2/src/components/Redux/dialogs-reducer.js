const varADD_Message = 'ADD-NEW-MESSAGES-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case varADD_Message:
            let newMessage = {
                id: 5, message: action.textMessage
            };
            return {
                ...state,
                MessagesData: [...state.MessagesData, newMessage]
            };
            // stateCopy.MessagesData.push(newMessage);
            // state.MessagesData.push(newMessage);
            // state._addMessage(action.textMessage);
    }
    return state;
}

export default dialogsReducer;

export const addMessageAction = (text) => {
    return {type: varADD_Message, textMessage: text};
}