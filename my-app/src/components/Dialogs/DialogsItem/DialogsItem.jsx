import React from "react";
import d from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import * as path from "path";

const DialogsItem = (props) => {
    let path = "/messages/" + props.id;
    return (
        <NavLink to={path} className={d.dialog}>{props.img} {props.name}</NavLink>
    )
}


export default DialogsItem;