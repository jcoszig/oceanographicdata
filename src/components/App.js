import React, { Component } from "react";
import Searchfilter from "./Searchfilter";
 
class App extends Component {

  // Initialize state
  state = {
    parsedData : {},
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

    this.findMatches(searchQuery);
    // console.log(ui);
  };

  // Filter data by matching searchQuery
  findMatches = searchQuery => {
    const data = this.state.parsedData;
    let wordToMatch = searchQuery.toLowerCase();

    return data.filter(search => {
      const regex = new RegExp(wordToMatch, 'gi');

      console.log( search.title.match(regex) || search.description.match(regex) );
      return search.title.match(regex) || search.description.match(regex)
    });
  }

  render() {
    return (
      <div>
        App component.
        <Searchfilter
          updateSearchQuery={this.updateSearchQuery}
        />
      </div>
    );
  }
}
 
export default App;