import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsType, StateType, StoreType} from "./redux/state";


export type PropsType = {
    state: StateType
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wraper'>
                <Header/>
                <Navbar/>
                <div className='app-wraper-content'>
                    <Route exact path={'/dialogs'}
                           render={() => <Dialogs store={props.store}/>}/>
                    <Route exact path={'/profile'}
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                           />}/>

                    <Route exact path={'/news'} render={() => <News/>}/>
                    <Route exact path={'/music'} render={() => <Music/>}/>
                    <Route exact path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
