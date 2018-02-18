import React, { Component } from "react";
import './HorizontalMenu.css'
 
class HorizontalMenu extends Component {
  render() {
    return (
      <div className="Horizontal-menu">
        <ul>
          <li><a href="/home/one">One</a></li>
          <li><a href="/home/two">Two</a></li>
          <li><a href="/home/three">Three</a></li>
        </ul>
      </div>
    );
  }
}
 
export default HorizontalMenu;