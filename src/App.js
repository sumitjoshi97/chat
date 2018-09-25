import React, { Component } from 'react';
import {Sidebar} from './containers/Sidebar/Sidebar'
import {MessagesList} from './containers/MessagesList/MessagesList'
import {AddMessage} from './containers/AddMessage/AddMessage'
import './App.css';

class App extends Component {
    render() {
        return (
            <div id="container">
                <Sidebar />
                <section id="main">
                    <MessagesList />
                    <AddMessage />
                </section>        
            </div>        
        );
    }
}

export default App;