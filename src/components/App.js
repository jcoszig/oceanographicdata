import React, { Component } from "react";
import { Link } from "react-router-dom";
import Searchfilter from "./Searchfilter";
import Preview from "./Preview";
import Filter from "./Filter";
 
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
    sortDropdown : false
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
    this.setState({ filteredData });
  }

  // Filter matches based on filter checkbox
  updateFilterList = filter => {
    let filterList = { ...this.state.filterList };

    filterList = this.state.parsedData.filter( item => {
      const regex = new RegExp(filter, 'gi');
      return item.title.match(regex) || item.description.match(regex)
    });
    this.setState({ filterList });
  }

  numberResults = () => {
    if(this.state.filteredData.length > 0){
      return (
        `${this.state.filteredData.length} results for "${this.state.searchQuery}"`
      );
    }
  }

  toggleSortOptions = () => {
    this.setState(state => ({
      sortDropdown: !state.sortDropdown
    }));
  }

  render() {

    return (
      <>
        <header className="main-header">
          <div className="header-title">
            <Link to="/">
              <h1>Oceanographic Data</h1>
            </Link>
            </div>
          <Searchfilter
            updateSearchQuery={this.updateSearchQuery}
          />
          <button className="search-dropdown-mobile-open">
            <p>filters</p>
          </button>
        </header>
        <Filter />
        <main className="article-container">
          <div className="number-results">
            {this.numberResults()}
          </div>
          <div className="preview-header">
            <div className="sort-selection">
              <div className="sort-selected"
              onClick={(e) => this.toggleSortOptions()}>
                <p>Sort by: </p>
                <span>Date</span>
                <i className={this.state.sortDropdown ? 
                  'sort-dropdown-arrow fas fa-chevron-up' :
                  'sort-dropdown-arrow fas fa-chevron-down'}></i>
              </div>
              <ul className={this.state.sortDropdown ? 'sort-dropdown active' : 'sort-dropdown'}>
                <li><p>Date</p></li>
                <li><p>Alphabetically</p></li>
              </ul>
              <ul className="preview-results">
                {/* Render filtered objects */}
                {this.state.filteredData && this.state.filteredData.map(item => (
                  <Preview 
                    key={item.identifier}
                    index={item.identifier}
                    title={item.title}
                    description={item.description}
                    temporal={item.temporal}
                    accesslevel={item.accesslevel}
                    searchquery={this.state.searchQuery}
                  />
                ))}
              </ul>
            </div>
          </div>
        </main>
      </>
    );
  }
}
 
export default App;
