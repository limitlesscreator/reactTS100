import React from 'react';
import s from './StylesModule/App.module.sass'

const App = () => {
    return (
        <div className={s.app}>
            <div className={s.header}></div>
            <div className={s.flex}>
                <div className={s.navBar}>
                    <div>Profile</div>
                    <div>Messages</div>
                    <div>News</div>
                    <div>Music</div>
                    <div>Settings</div>
                </div>
                <div className={s.content}>
                    <div>ava description</div>
                    <div>My posts</div>
                    <div>New post</div>
                    <div>post 1</div>
                </div>
            </div>
        </div>
    );
}


export default App;
