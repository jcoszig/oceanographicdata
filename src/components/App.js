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
      description : {}
    },
    searchQuery : '',
    filteredData : []
  }

  // Fetch JSON data and set in state.
  componentDidMount() {
    fetch('http://localhost:3000/data/data.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      this.setState({parsedData:data})
    })
    .catch(err => {
      console.log('unable to fetch JSON data. Error: ', err)
    })
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

  // Filter data by matching searchQuery
  // findMatches = (wordToMatch, data) => {
  //   return data.filter(item => {
  //     const regex = new RegExp(wordToMatch, 'gi');
  //     return item.title.match(regex) || item.description.match(regex)
  //   });
  // }

  displayMatches(searchQuery){
    // todo
  }

  render() {
    return (
      <div>
        App component.
        <Searchfilter
          updateSearchQuery={this.updateSearchQuery}
        />
        <Preview />
      </div>
    );
  }
}
 
export default App;