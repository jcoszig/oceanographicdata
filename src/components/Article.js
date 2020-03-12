import React, { Component } from "react";
 
class Article extends Component {
  
  render() {

    return (
      <section>
        Article component.
        <p>article index: {this.props.match.params.articleId}</p>
      </section>
    );
  }
}
 
export default Article;