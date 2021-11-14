import React, {useEffect, useState} from "react";
import p from "./Posts.module.css";



const Posts = (props) => {
    const [count, setCount] = useState(props.likeCount);
    return (
        <div className={p.item}>
            <img
                src="https://postal.ninja/assets/images/48981817022dda35bf548590be816d60-logo-100x100.png"
                alt="ava image"
            />
            {props.message}
            <div>
                <div>
                    <div>
                        {count}
                    </div>
                    <button onClick={() => setCount(count + 1)}>Like</button>
                    <button onClick={() => setCount(count - 1)}>Dislike</button>
                </div>
            </div>
        </div>
    );
};


export default Posts;
