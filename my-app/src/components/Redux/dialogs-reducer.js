const varADD_Message = 'ADD-NEW-MESSAGES-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case varADD_Message:
            state._addMessage(action.textMessage);
            break;
    }
    return state;
}

export default dialogsReducer;

export const addMessageAction = (text) => {
    return {type: varADD_Message, textMessage: text};
}