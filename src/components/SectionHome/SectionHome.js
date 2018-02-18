import React, { Component } from "react";
import './SectionHome.css'
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu.js';
import SquareItem from '../items/SquareItem/SquareItem.js';
import RowItem from '../items/RowItem/RowItem.js';

class SectionHome extends Component {

  render() {
    
    return (
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
    );
    
  } // render end

}

/*
  <div className="SectionHome">
      { this.props.content }
  </div>
*/

SectionHome.defaultProps = {
  content: null
}
 
export default SectionHome;
