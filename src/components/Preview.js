import React, { Component } from "react";
import { Link } from "react-router-dom";
import { formatDateRangeUK } from "../helpers";


class Preview extends Component {

  render() {    
    // const formatedDateRange = () => {
    //   return formatDateRangeUK(this.props.temporal);
    // } 

    return (
      <li>
        <div className="preview-title">{this.props.title}</div>
        <div className="preview-description">{this.props.description}}</div>
        <div className="preview-date-published">Date: {formatDateRangeUK(this.props.temporal)}</div>
        <Link to={`/article/${this.props.index}`}>
          <div  className="preview-view-full">View full details</div>
        </Link>
      </li>
    );
  }
}
 
export default Preview;