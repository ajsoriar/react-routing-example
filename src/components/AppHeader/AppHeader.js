import React, { Component } from "react";
import logo from './../../imgs/happy-cloud.svg';
import './AppHeader.css'
import Avatar from 'react-string-avatar';

class AppHeader extends Component {
  render() {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React routing example</h1>
        <Avatar initials="AS" bgColor="#00FF00"></Avatar>
        </header>
    );
  }
}
 
export default AppHeader;