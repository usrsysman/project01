import React from "react";
import d from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import * as path from "path";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messeges/Messages";

const Dialogs = (props) => {

    let dialogsElements = props.state.DialogsData.map((d) => {
        return <div><DialogsItem name={d.name} id={d.id}/></div>;
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
            </div>
        </div>
        // <div>
        //     <DialogsItem/>
        //     <Messages/>
        // </div>
    );
}

export default Dialogs;