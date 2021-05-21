import React from 'react';
import s from './StylesModule/App.module.sass'
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";

const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <div className={s.flex}>
                <Navbar/>
                <Profile/>
            </div>
        </div>
    );
}


export default App;
