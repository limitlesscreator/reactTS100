import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type PropsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (message: string) => void
}

export const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
            props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        if (text){
            props.updateNewPostText(text)
        } else {
            props.updateNewPostText('')
        }
    }

    return (
        <div>
            <h3>New post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <button onClick={addPost}>Add post
            </button>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}