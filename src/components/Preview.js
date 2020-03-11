import React, { Component } from "react";
 
class Preview extends Component {

  render() {    
    return (
      <li>
        <div className="preview-title">{this.props.title}</div>
        <div className="preview-description">{this.props.description}}</div>
        <div className="preview-date-published">Published: {this.props.temporal}</div>
        <div className="preview-view-full">View full details</div>
      </li>
    );
  }
}
 
export default Preview;