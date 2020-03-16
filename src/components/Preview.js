import React, { Component } from "react";
import { formatDateRangeUK, setAccessLevelIcon } from "../helpers";
import { Link } from "react-router-dom";

class Preview extends Component {

  highlightMatches = (str, searchQuery) => {
    const splitMatchFromStr = str.split(new RegExp(`(${searchQuery})`, 'gi'));
    console.log(`splitMatchFromStr: ${splitMatchFromStr}`);
    return <p>{splitMatchFromStr.map(splitStr => 
      splitStr.toLowerCase() === searchQuery.toLowerCase() ? <span className="highlight">{splitStr}</span> : splitStr)}</p>;
  }
  
  // trimDescription = (str, searchQuery) => {
  //   const description = this.highlightMatches(str, searchQuery);

  //   // isolate description after matched word up until end of sentence.
  //   const upUntilLastSentence = new RegExp('[^.]+');
  //   const afterMatchedWord = description.props.children[2] ? description.props.children[2] : false;
  //   if(afterMatchedWord){
  //     console.log(afterMatchedWord.match(upUntilLastSentence));
  //   }
  //   return;
  // }

  render() {    

    return (
      <li>
        <div className="access-level-icon">
          <i className={'fas ' + setAccessLevelIcon(this.props.accesslevel)}></i>
          <span> | {this.props.accesslevel}</span>
        </div>
        <h4 className="preview-title">{this.highlightMatches(this.props.title, this.props.searchquery)}</h4>
        <div className="preview-description">{this.highlightMatches(this.props.description, this.props.searchquery)}</div>
        {/* <div className="preview-description">{this.trimDescription(this.props.description, this.props.searchquery)}</div> */}
        <div className="preview-date-published">Date: {formatDateRangeUK(this.props.temporal)}</div>
        <Link to={`/article/${this.props.index}`}>
          <div  className="preview-view-full">View full details</div>
        </Link>
      </li>
    );
  }
}
 
export default Preview;