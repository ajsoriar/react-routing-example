import React, { Component } from "react";
//import logo from './../../imgs/happy-cloud.svg';
import './AppHeader.css'

import Avatar from '../reactStringAvatar/react-string-avatar.js';
//import Avatar3 from '../reactStringAvatar/react-string-avatar.improved.js';
//import Avatar from 'react-string-avatar';


class AppHeader extends Component {
  render() {
    return (
        <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo"/> */}
        <h1 className="App-title">Welcome to React routing example</h1>
        {/* <Avatar initials="AS" bgColor="#00FF00"></Avatar> */}

        {/* <Avatar initials="A"></Avatar>
        <Avatar initials="AS" bgColor="#00FF00"></Avatar>
        <Avatar initials="AJS" bgColor="cyan" textColor="blue" roundShape={true} ></Avatar>
        <Avatar initials="AJ" bgColor="red" textColor="yellow" pictureResolution={512} width={64}></Avatar>
        <Avatar initials="AJ" bgColor="yellow" textColor="green" pictureResolution={1024} width={32}></Avatar>
        <Avatar initials="AS" bgColor="lightgreen" textColor="red" pictureResolution={16} width={128} pixelated={false} ></Avatar>
        <Avatar initials="AS" bgColor="#99f499" textColor="red" pictureResolution={16} width={128} pixelated={true} ></Avatar> */}
        <Avatar initials="AS" roundShape={true} bgColor="#a8ff2c" textColor="black" pictureResolution={512} width={42} pixelated={false} class="adres-css" wrapperStyle={{border:'4px solid red'}} wrapper={false} ></Avatar>
        <Avatar initials="AS" roundShape={true} string="  andres     jose   soria " bgColor="orange" textColor="#FFF" pictureResolution={256} width={64} pixelated={false} class="adres-css" wrapperStyle={{border:'4px solid red'}} ></Avatar>
        <Avatar roundShape={true} bgColor="#36adf2" textColor="white" pictureResolution={256} width={56} pixelated={false} class="adres-css" wrapperStyle={{border:'2px solid blue'}} ></Avatar>
        <Avatar initials="CM" cornerRadius={7} bgColor="#3875d7"></Avatar>
        <Avatar initials="jpg" pictureFormat="jpeg" bgColor="red" textColor="yellow" width={64} cornerRadius={5} ></Avatar>
        <Avatar initials="png" pictureFormat="png" bgColor="purple" textColor="yellow" width={64} cornerRadius={5} ></Avatar>

        {/* <Avatar initials="AS" bgColor="#00FF00"></Avatar> */}

        </header>
    );
  }
}
 
export default AppHeader;