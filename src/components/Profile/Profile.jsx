import React, {} from "react";
import s from '../../StylesModule/Profile.module.sass'
import {MyPosts} from "./MyPosts/MyPosts";
export function Profile(){

    return(
        <>
            <div className={s.content}>
                <MyPosts/>
            </div>
        </>
    )
}
