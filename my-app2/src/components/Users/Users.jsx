import React from "react";
import styles from "./Users.modules.css";


const Users = (props) => {
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
            <div>
                <img src={u.photo} className={styles.userPhoto} />
            </div>
            <div>
                
                <button>Follow</button>
            </div>
        </span>
            <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
        </span>
        </div>)
        }
    </div>
}

export default Users;