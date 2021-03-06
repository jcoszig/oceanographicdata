import React, { Component } from "react";
import { Link } from "react-router-dom";
import { formatDateRangeUK, setAccessLevelIcon } from "../helpers";
 
class Article extends Component {
  state = {
    article: []
  };

  articleId = this.props.match.params.articleId;

  // Fetch specific article and set in local state.
  async componentDidMount() {
    await fetch('http://localhost:3000/data/data.json')
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then(
          data => { 
            const matchingArticle = data.filter( item => {
              return item.identifier === this.articleId
            });
            this.setState({article:matchingArticle})
        })
      }
    )
    .catch(err => {
      console.log('unable to fetch JSON data. Error: ', err)
    });
  }

  renderArticle = () => this.state.article.map( item => {
    const identifier = item.identifier;
    const title = item.title;
    const description = item.description;
    const temporal = item.temporal;
    const type = item.type;
    const publisher_name = item.publisher_name;
    const publisher_type = item.publisher_type;
    const modified = item.modified;
    const contactpoint_hasemail = item.contactpoint_hasemail;
    const contactpoint_fn = item.contactpoint_fn;
    const contactpoint_type = item.contactpoint_type;
    const accrualperiodicity = item.accrualperiodicity;
    const accesslevel = item.accesslevel;

    const spatial = item.spatial;

    return (
      <>
        <div className="access-level-icon">
          <i className={'fas ' + setAccessLevelIcon(accesslevel)}></i>
          <span> | {accesslevel}</span>
        </div>
        <span key={this.articleId + '-temporal'} 
              className="article-date-published">Date: {formatDateRangeUK(temporal)}</span>
        <h4 key={this.articleId + '-title'}
            classname="article-title">{title}</h4>
        <p  key={this.articleId + '-description'}
            className="article-description">{description}</p>
        <p  key={this.articleId + '-type'}
            className="article-type">{type}</p>
        <p key={this.articleId + '-publisher_name'}
            className="article-publisher_name">{publisher_name}</p>
        <p key={this.articleId + '-publisher_type'}
            className="article-publisher_type">{publisher_type}</p>
        <p key={this.articleId + '-modified'}
            className="article-modified">Modified: {modified}</p>
        <p key={this.articleId + '-contactpoint_hasemail'}
            className="article-contactpoint_hasemail">{contactpoint_hasemail}</p>
        <p key={this.articleId + '-contactpoint_fn'}
            className="article-contactpoint_fn">{contactpoint_fn}</p>
        <p key={this.articleId + '-contactpoint_type'}
            className="article-contactpoint_type">{contactpoint_type}</p>
        <p key={this.articleId + '-accrualperiodicity'}
            className="article-accrualperiodicity">{accrualperiodicity}</p>
        {/* <p>{spatial}</p>  */}
      </>
    )
  }) 

  //todo add Header component in render.

  render() {

    return (
      <>
        <header className="main-header">
          <Link to="/">
            <div className="header-title">
              <h1>Oceanographic data</h1>
            </div>
          </Link>
        </header>
        <main className="article-container">{this.renderArticle()}</main>
      </>
    )
  }
}
 
export default Article;