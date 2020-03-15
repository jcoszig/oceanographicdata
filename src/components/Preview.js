import React, { Component } from "react";
import { Link } from "react-router-dom";
import { formatDateRangeUK, setAccessLevelIcon } from "../helpers";

class Preview extends Component {
  render() {    

    return (
      <li>
        <div className="access-level-icon">
          <i className={'fas ' + setAccessLevelIcon(this.props.accesslevel)}></i>
        </div>
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