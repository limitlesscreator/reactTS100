import React from 'react';
import './App.css';
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";
import {Header} from "./components/Header";


const App = () => {
    return (
        <div className='App'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}


export default App;
