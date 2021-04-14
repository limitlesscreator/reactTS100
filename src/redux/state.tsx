import {fchmod} from "fs";


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

export type StoreType = {
    _state : StateType
    _callSubscriber: (newPost:any) => void
    addPost: () => void
    updateNewPostText: (newTest: string) => void
    subscribe: (observer: any) => void
    getState: () => StateType
}

export const store: StoreType = {
    _state:  {
        profilePage: {
            posts: [
                {id: 1, message: "hello, how are you", likesCount: 12},
                {id: 2, message: "It's my first apple", likesCount: 152},
                {id: 2, message: "It's my first apple", likesCount: 152},
                {id: 2, message: "It's my first apple", likesCount: 152},
            ],
            newPostText: 'Vladislav you can do it for yourself'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimich'},
                {id: 2, name: 'Sweta'},
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'How"s your day'},
                {id: 3, message: 'Dollars'},
            ],
        }
    },
    getState(){return this._state},
    _callSubscriber(){
        console.log('State changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText:string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer:any) {
        this._callSubscriber = observer
    },
}





