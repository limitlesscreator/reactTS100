import React from 'react';
import s from './StylesModule/App.module.sass'
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Content} from "./components/Content";

const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <div className={s.flex}>
                <Navbar/>
                <Content/>
            </div>
        </div>
    );
}


export default App;
