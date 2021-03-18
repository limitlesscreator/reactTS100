import {fchmod} from "fs";
import {rerenderEntireTree} from "../render";


export type PostType = {
    message: string
    likesCount: number
    id: number
}
export type DialogType = {
    name: string
    id: number
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "hello, how are you", likesCount: 12},
            {id: 2, message: "It's my first applee", likesCount: 152},
            {id: 2, message: "It's my first applee", likesCount: 152},
            {id: 2, message: "It's my first applee", likesCount: 152},
        ],
        newPostText: 'Vladislav you can do it for yourself'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimich'},
            {id: 2, name: 'Sweta'},
            {id: 3, name: 'Kolya'},
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'How"s your day'},
            {id: 3, message: 'Dollars'},
        ],
    }
}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''

    rerenderEntireTree(state)
}

export let updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}