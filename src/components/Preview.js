import React, { Component } from "react";
import { Link } from "react-router-dom";
import { formatDateRangeUK } from "../helpers";


class Preview extends Component {

  render() {    
    const formatedDateRange = () => {
      return formatDateRangeUK(this.props.temporal);
    } 

    return (
      <li>
        <div className="preview-title">{this.props.title}</div>
        <div className="preview-description">{this.props.description}}</div>
        <div className="preview-date-published">Published: {formatedDateRange}</div>
        <Link to={`/article/${this.props.index}`}>
          <div  className="preview-view-full"
                onClick={() => this.props.updateArticle(this.props.index)}>View full details</div>
        </Link>
      </li>
    );
  }
}
 
export default Preview;