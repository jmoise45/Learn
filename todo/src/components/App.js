import React, { Component } from 'react';

import TaskBar from './taskbar/';
import Header from './header/';
import TaskList from './tasklist/';


class App extends Component{
    render() {
        return (
            <div>
                <Header />
                <TaskBar />
                <TaskList />
            </div>
        );
    }
}

export default App;

