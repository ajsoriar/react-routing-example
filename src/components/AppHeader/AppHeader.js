import React, { Component } from "react";
import logo from './../../imgs/happy-cloud.svg';
import './AppHeader.css'

class AppHeader extends Component {
  render() {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React routing example</h1>
        </header>
    );
  }
}
 
export default AppHeader;