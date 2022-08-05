import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider}   from 'react-redux';
import getStore from './store/redux-store';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/all.css';
import App from './components/App';
import Editor from './components/Editor';

class Root extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element = {<App/>} />
                    <Route path = '/edit' element = {<Editor/>}/>
                </Routes>
            </BrowserRouter>

        )
    }


}


const store = localStorage.getItem('state-for-apple-project') == null? getStore() : 
getStore(JSON.parse(localStorage.getItem('state-for-apple-project')));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store = {store}><Root/></Provider>);
