import React, { Component } from "react";
import { formatDateRangeUK, setAccessLevelIcon } from "../helpers";
import { Link } from "react-router-dom";

class Preview extends Component {

  highlightMatches = (str, searchQuery) => {
    const splitMatchFromStr = str.split(new RegExp(`(${searchQuery})`, 'gi'));
    return <p>{splitMatchFromStr.map(splitStr => 
      splitStr.toLowerCase() === searchQuery.toLowerCase() ? <span className="highlight">{splitStr}</span> : splitStr)}</p>;
  }
  
  render() {    

    return (
      <li>
        <div className="access-level-icon">
          <i className={'fas ' + setAccessLevelIcon(this.props.accesslevel)}></i>
        </div>
        <h4 className="preview-title">{this.highlightMatches(this.props.title, this.props.searchquery)}</h4>
        <div className="preview-description">{this.highlightMatches(this.props.description, this.props.searchquery)}</div>
        <div className="preview-date-published">Date: {formatDateRangeUK(this.props.temporal)}</div>
        <Link to={`/article/${this.props.index}`}>
          <div  className="preview-view-full">View full details</div>
        </Link>
      </li>
    );
  }
}
 
export default Preview;