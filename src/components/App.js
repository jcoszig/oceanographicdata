import React, { Component } from "react";
import Searchfilter from "./Searchfilter";
import Preview from "./Preview";
 
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
    filteredData : []
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
      console.log(this.getFilteredData() );
    });
    // this.previewFilteredData();
  }

  // Filter matches based on filter checkbox
  updateFilterList = (filter) => {
    let filterList = { ...this.state.filterList };

    filterList = this.state.parsedData.filter( item => {
      const regex = new RegExp(filter, 'gi');
      return item.title.match(regex) || item.description.match(regex)
    });
    this.setState({ filterList }, () =>{
      console.log(this.getFilteredData() );
    });
  }

  previewFilteredData(){
    let result = []
    if(this.state.filteredData.length > 0){
      result = this.state.filteredData.map( item => {
        return [item.title, item.description]
      });
    } 
    return result;
  }

  highlightMatches(searchQuery){
    // todo
  }

  render() {
    return (
      <>
      <header className="main-header">
        <div className="header-title">Oceanographic data</div>
        <Searchfilter
          updateSearchQuery={this.updateSearchQuery}
        />
      </header>
        <Preview 
          filteredData={
            this.state.filteredData && this.state.filteredData.map(item => {
              return item;
            })
          }
        />
      </>
    );
  }
}
 
export default App;