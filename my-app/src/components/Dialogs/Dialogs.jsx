import React from "react";
import d from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import * as path from "path";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messeges/Messages";

let NewMessageElement = React.createRef();

let addMessage = () => {
    let text = NewMessageElement.current.valueOf();
    alert(text);
}

const Dialogs = (props) => {

    let dialogsElements =  props.state.DialogsData.map((d) => {
        return <div><DialogsItem name={d.name} id={d.id} img={d.img}/></div>;
    })

    let messagesElements = props.state.MessagesData.map((m) => {
        return <Messages message={m.message}/>;
    })

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea ref={NewMessageElement} cols="20" rows="10"></textarea>
                    </div>
                    <button onClick={ addMessage }>Add new message</button>
                </div>
            </div>
        </div>
        // <div>
        //     <DialogsItem/>
        //     <Messages/>
        // </div>
    );
}

export default Dialogs;