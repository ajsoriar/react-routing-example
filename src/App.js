import React, { Component } from 'react';

import './App.css';

import AppHeader from './components/AppHeader/AppHeader.js';

// Side-menu
import SideMenu from './components/SideMenu/SideMenu.js';


class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <AppHeader className="App-header"></AppHeader> */}

        <SideMenu/>

        {/* 
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        */}
        
      </div>
    );
  }
}

export default App;
