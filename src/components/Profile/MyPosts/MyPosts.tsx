import React, {} from "react";
import {Post} from "./Post/Post";
import s from "../../../StylesModule/MyPosts.module.sass"

export function MyPosts(){
    
    return(
        <>
            <div>
                <div className={s.title}>My posts</div>
                <Post message={'hello guys, i wanna to be honest with you, i wanna to be rich, that\'s it'}/>
                <Post message={'how\'s your life and day?'}/>
                <Post message={'i hope you are good'}/>
                <Post message={'have a nice day!'}/>
            </div>
        </>
    )
}
