import React, { Component } from "react";
import './SquareItem.css'
 
class SquareItem extends Component {

    constructor(props) {
        super(props);
        this.state = { counter: 1 };
    }

    render() {
        return (
            <div className="Square-item">
            <div className="item">
                {this.state.counter}
            </div>
            <h1 className="name">{this.props.itemText}</h1>
            </div>
        );
    }
}

SquareItem.defaultProps = {
    itemText: "Untitled",
    itemSize: 250
};

/*
SquareItem.propTypes = {
    itemText: React.PropTypes.string,
    itemSize: React.PropTypes.number
}
*/
 
export default SquareItem;