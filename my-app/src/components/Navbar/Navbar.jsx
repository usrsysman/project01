import React from "react";
import c from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={c.nav}>
        <div className={c.item}>
            <NavLink to="/profile" activeClassName={c.active}>Profile</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/messages">Messages</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/news">News</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/music">Music</NavLink>
        </div>
        <div></div>
        <div className={c.item}>
            <NavLink to="/settings">Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;