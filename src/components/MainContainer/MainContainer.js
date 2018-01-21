import React, { Component } from "react";
import './MainContainer.css'
 
class MainContainer extends Component {

/*
  constructor() {
    super();
    this.state = { x: 0, y: 0 }
  }
*/

  render() {
    
    return (
        <div className="Main-container">
            { this.props.content }
            {/* { this.props.children(this.state) } */}
        </div>
    );
  }
}

MainContainer.defaultProps = {
  content: null
}
 
export default MainContainer;
