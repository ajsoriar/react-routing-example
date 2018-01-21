import React, { Component } from 'react';

import './App.css';

import AppHeader from './components/AppHeader/AppHeader.js';
import SideMenu from './components/SideMenu/SideMenu.js';
import MainContainer from './components/MainContainer/MainContainer.js';
import SquareItem from './components/items/SquareItem/SquareItem.js';
import RowItem from './components/items/RowItem/RowItem.js';
import HorizontalMenu from './components/HorizontalMenu/HorizontalMenu.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <AppHeader/>

        <SideMenu/>

        {/* <SquareItem itemText="We try" size="300" /> */}

        <MainContainer content={
            <span>
              <HorizontalMenu/>
              <RowItem content={
                  <span>
                      <SquareItem itemText="We try 1" size="100" />
                      <SquareItem itemText="We try 2" size="100" />
                      <SquareItem itemText="We try 3" size="100" />
                      <SquareItem itemText="We try 4" size="100" />
                      <SquareItem itemText="We try 5" size="100" />
                  </span>
              } />
            </span>
        } />
      </div>
    );
  }
}

export default App;
