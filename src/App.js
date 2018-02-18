import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom'
import SectionHome from './components/SectionHome/SectionHome.js'
import SectionStuff from './components/SectionStuff/SectionStuff.js'
import SectionAbout from './components/SectionAbout/SectionAbout.js'
import './App.css';
import AppHeader from './components/AppHeader/AppHeader.js';
import SideMenu from './components/SideMenu/SideMenu.js';
import MainContainer from './components/MainContainer/MainContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <AppHeader/>
        <SideMenu/>

        {/* <SquareItem itemText="We try" size="300" /> */}

        <MainContainer content={
          <Router>
          <div>
          <Route exact path={["/","/home/*"]} component={SectionHome}/>
          <Route path="/stuff" component={SectionStuff}/>
          <Route path="/about" component={SectionAbout}/>
          </div>
          </Router> 
        } />

      </div>
    );
  }
}

export default App;
