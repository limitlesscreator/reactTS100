import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import React, {ChangeEvent} from "react";
import {Message} from "./Message/Message";
import {MessagesPageType, sendMessageCreator, StoreType, updateNewMessageBodyCreator} from "../../redux/state";


type MessageType = {
    id: number
    message: string
}
type DialogType = {
    name: string
    id: number
}
type PropsPosts = {
    state: MessagesPageType
}


type PropsType = { store: StoreType };

export const Dialogs = (props:PropsType) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map (d =><DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       let body =  e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className="messages">
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder={'Enter your message'}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}