import React from "react";
import s from './Post.module.css'

export const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img className={s.avatar}
                 src="https://i.pinimg.com/originals/5e/bb/01/5ebb01fae24bc34129d27d6a397afb48.png"
                 alt=""/>
            {props.message}
            <div><span>like: {props.likesCount}</span></div>
        </div>
    )
}