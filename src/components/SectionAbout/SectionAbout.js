import React, { Component } from "react";
import './SectionAbout.css'
 
class SectionAbout extends Component {

  render() {
    
    return (
        <div className="SectionAbout">ABOUT</div>
    );
  }
}

SectionAbout.defaultProps = {
  content: null
}
 
export default SectionAbout;
