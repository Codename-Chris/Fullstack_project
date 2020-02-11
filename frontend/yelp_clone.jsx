import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store'
import {login} from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // const store = configureStore();
    window.login = login;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    ReactDOM.render(<h1>Chris' Yelp Clone</h1>,root)
});