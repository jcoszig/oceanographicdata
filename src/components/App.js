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
    searchQuery : ''
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
    // const searchQuery = { ...this.state.searchQuery };
    // searchQuery = ui;
    // this.setState({ searchQuery });
    
    console.log(ui);
  };

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