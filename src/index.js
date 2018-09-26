import React from 'react';
import ReactDOM from 'react-dom';

// import redux utilities
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'

// importing files
import {addUser} from './store/actions/message'
import './index.css';
import App from './App';
import handleNewMessage from './sagas/index'
import username from './utils/name'

// importing sockets
import setupSocket from './sockets/index'

// importing service worker 
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './store/reducers'
import createSagaMiddleware from 'redux-saga';

// create middleware for redux-saga
const sagaMiddleWare = createSagaMiddleware()

// composing redux dev tools 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creating a store for redux
const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(sagaMiddleWare))
)

// initialize socket
const socket = setupSocket(store.dispatch, username)

// run socket in sagaMiddleware
sagaMiddleWare.run(handleNewMessage, {socket, username})

store.dispatch(addUser(username))
// creating app for rendering
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

// rendering react-redux app in DOM
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();