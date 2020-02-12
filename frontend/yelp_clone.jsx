import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import {login} from './actions/session_actions';
import Root from './components/root'


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.login = login;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>,root)
});