import React, { Component } from "react";
import { formatDateRangeUK, setAccessLevelIcon } from "../helpers";
import { Link } from "react-router-dom";

class Preview extends Component {
  
  render() {    

    return (
      <li>
        <div className="access-level-icon">
          <i className={'fas ' + setAccessLevelIcon(this.props.accesslevel)}></i>
        </div>
        <h4 className="preview-title">{this.props.title}</h4>
        <div className="preview-description">{this.props.description}</div>
        <div className="preview-date-published">Date: {formatDateRangeUK(this.props.temporal)}</div>
        <Link to={`/article/${this.props.index}`}>
          <div  className="preview-view-full">View full details</div>
        </Link>
      </li>
    );
  }
}
 
export default Preview;