import React, { Component } from "react";
//import './components/SideMenu/SideMenu.css'
import './SideMenu.css'
 
class SideMenu extends Component {
  render() {
    return (
        <div className="Side-menu">
          <h1>Side Menu</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
    );
  }
}
 
export default SideMenu;