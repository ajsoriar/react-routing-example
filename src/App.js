import React, { Component } from 'react';

import './App.css';

import AppHeader from './components/AppHeader/AppHeader.js';
import SideMenu from './components/SideMenu/SideMenu.js';
import MainContainer from './components/MainContainer/MainContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <AppHeader className="App-header"></AppHeader> */}

        <AppHeader/>

        <SideMenu/>

        <MainContainer/>

      </div>
    );
  }
}

export default App;
