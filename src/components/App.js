import React, { Component } from "react";
import Searchfilter from "./Searchfilter";
import Preview from "./Preview";
import Article from "./Article";
import { Link } from "react-router-dom";
 
class App extends Component {

  // Initialize state
  state = {
    parsedData : [],
    dataProperties : {
      type : {},
      temporal : {},
      publisherName : {}, //publisher_name
      publisherType : {}, //publisher_type
      modified : {},
      identifier : {},
      contactpointHasemail : {}, //contactpoint_hasemail
      contactpointFn : {}, //contactpoint_fn
      contactpointType : {}, //contactpoint_type
      accrualperiodicity : {},
      accesslevel : {},
      spatial : {},
      title : {},
      description: {}
  },
    searchQuery : '',
    filterList : [],
    filteredData : [],
    article : []
  }

  // Fetch JSON data and set in state.
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
          data => { this.setState({parsedData:data})
        })
      }
    )
    .catch(err => {
      console.log('unable to fetch JSON data. Error: ', err)
    });
  }

  // Store user input from search query
  updateSearchQuery = ui => {
    // Take copy of current state then update
    let searchQuery = { ...this.state.searchQuery };
    searchQuery = ui;
    this.setState({ searchQuery });

    this.updateFilteredData(searchQuery.toLowerCase() );
    // console.log(ui);
  };

  // Filter matches within title or description
  updateFilteredData = wordToMatch => {
    let filteredData = { ...this.state.filteredData };

    filteredData = this.state.parsedData.filter( item => {
      const regex = new RegExp(wordToMatch, 'gi');
      return item.title.match(regex) || item.description.match(regex)
    });
    this.setState({ filteredData }, () =>{
      console.log(filteredData);
    });
  }

  // Filter matches based on filter checkbox
  updateFilterList = (filter) => {
    let filterList = { ...this.state.filterList };

    filterList = this.state.parsedData.filter( item => {
      const regex = new RegExp(filter, 'gi');
      return item.title.match(regex) || item.description.match(regex)
    });
    this.setState({ filterList });
  }

  updateArticle = (articleId) => {
    let article = { ...this.state.article };

    article = this.state.parsedData.filter( item => {
      return item.identifier === articleId;
    });
    this.setState({ article });
  }

  highlightMatches(searchQuery){
    // todo
  }

  test = () => {
    return 'render';
  }

  render() {
    
    return (
      <>
        <header className="main-header">
          <Link to="/">
            <div className="header-title">Oceanographic data</div>
          </Link>
          <Searchfilter
            updateSearchQuery={this.updateSearchQuery}
          />
        </header>
        <main className="article-container">
          <div className="preview-header">
            <div className="sort-selection">
              <p>Sort: </p><span>Date</span>
              <div className="sort-dropdown">
                <ul>
                  <li><p>Date</p></li>
                  <li><p>Alphabetically</p></li>
                  <li><p>Relevance (optional)</p></li>
                </ul>
              </div>
              <ul className="preview-results">
              {/* Render filtered objects */}
                {this.state.filteredData && this.state.filteredData.map(item => (
                  <Preview 
                    key={item.identifier}
                    index={item.identifier}
                    title={item.title}
                    description={item.description}
                    temporal={item.temporal}
                    updateArticle={this.updateArticle}
                  />
                ))}
              </ul>
            </div>
          </div>
          {/* Pass props to article only. No rendering at this stage. */}
          { this.state.article && this.state.article.map(article => (
            <Article
              key={article.identifier}
              index={article.identifier}
              title={article.title}
              description={article.description}
              type={article.type}
              temporal={article.temporal}
              publisherName={article.publisher_name}
              publisherType={article.publisher_type}
              modified={article.modified}
              contactpointHasemail={article.contactpoint_hasemail}
              contactpointFn={article.contactpoint_fn}
              contactpointType={article.contactpoint_type}
              accrualperiodicity={article.accrualperiodicity}
              accesslevel={article.accesslevel}
              spatial={article.spatial}
            />
          ))}
        </main>
      </>
    );
  }
}
 
export default App;
