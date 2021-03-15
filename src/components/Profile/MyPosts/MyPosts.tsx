import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type PropsType = {
    posts: Array<PostType>
}

export const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div>
            <h3>New post</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <button onClick={addPost}>Add post
            </button>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}