import React from "react";
import d from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import * as path from "path";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messeges/Messages";
import {addMessageAction} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// let NewMessageElement = React.createRef();

// let addMessage = () => {
//     let text = NewMessageElement.current.valueOf();
//     alert(text);
// }

// const DialogsContainer = (props) => {
//
//     let addMessage = (text) => {
//         props.dispatch(addMessageAction(text));
//     }
//
//     return (
//         <Dialogs addMessageBody={addMessage} dialogsPage={props.state.dialogsPage}/>
//         // <div>
//         //     <DialogsItem/>
//         //     <Messages/>
//         // </div>
//     );
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageBody: (text) => {
            dispatch(addMessageAction(text))
        }
    }
}

const superDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default superDialogsContainer;