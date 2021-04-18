import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostType, ProfilePageType} from "../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
    // updateNewPostText: (message: string) => void
    dispatch: (action: ActionsType) => void
}
    


export const Profile = (props: PropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}