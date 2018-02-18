import React, { Component } from "react";
import './SectionStuff.css'
 
class SectionStuff extends Component {

  render() {
    
    return (
        <div className="SectionStuff">STUFF</div>
    );
  }

}

SectionStuff.defaultProps = {
  content: null
}
 
export default SectionStuff;
