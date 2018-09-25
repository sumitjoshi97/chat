import React from 'react';
import ReactDOM from 'react-dom';

// import redux utilities
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// importing files
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import chat from './reducers'

// creating a store for redux
const store = createStore(chat)

// creating app for rendering
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

// rendering react-redux app in DOM
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
