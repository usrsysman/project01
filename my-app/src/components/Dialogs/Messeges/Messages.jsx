import React from "react";
import d from "./Messages.module.css";


const Messages = (props) => {
    return (
        <div className={d.message}>{props.message}</div>
    )
}

export default Messages;