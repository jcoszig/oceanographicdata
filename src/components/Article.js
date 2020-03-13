import React, { Component } from "react";
 
class Article extends Component {

  articleId = this.props.match.params.articleId 

  // renderArticle = key => {
  //   const articleId = this.props.match.params.articleId;
  //   return articleId ?
  //     <main>
  //       <p>renderArticle method.</p>
  //       {this.props.getArticle(articleId)}
  //     </main>
  //   : false;
  // }
  // renderArticle = () => {
  //   return 'renderArticle called Article.js'
  // }

  //todo add Header component in render.

  // this.props.key
  // this.props.index
  // this.props.title
  // this.props.description
  // this.props.temporal
  // this.props.type
  // this.props.temporal
  // this.props.publisherName
  // this.props.publisherType
  // this.props.modified
  // this.props.contactpointHasemail
  // this.props.contactpointFn
  // this.props.contactpointType
  // this.props.accrualperiodicity
  // this.props.accesslevel
  // console.log(this.props.spatial)

  // if this.props.match.params.articleId is set - that means we are on an article page
  // otherwise do not render anything!

  render() {
    return (
      <>
        <p>article</p>
        {this.articleId}
      </>
    )
  }
}
 
export default Article;