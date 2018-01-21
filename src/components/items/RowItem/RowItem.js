import React, { Component } from "react";
import './RowItem.css'

 
class RowItem extends Component {

    render() {
        return (
            <div className="Row-item">
                { this.props.content }
            </div>
        );
    }
}

RowItem.defaultProps = {
    content: null
}

export default RowItem;
