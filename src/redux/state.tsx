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
    _state: StateType
    _callSubscriber: (newPost: any) => void
    subscribe: (observer: any) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void

}

type AddPostActionType = {
    type: 'ADD-POST',
    postText: string
}

type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

export type ActionsType = AddPostActionType | ChangeNewTextActionType


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "hello, how are you", likesCount: 12},
                {id: 2, message: "It's my first apple", likesCount: 152},
                {id: 2, message: "It's my first apple", likesCount: 152},
                {id: 2, message: "It's my first apple", likesCount: 152},
            ],
            newPostText: "what's up"
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
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },


    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}





