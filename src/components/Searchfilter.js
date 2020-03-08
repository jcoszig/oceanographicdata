import React, { Component } from "react";
 
class SearchFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: ""
    }
  };

  /* Update local state with user input */
  handleChange = (e) => {
    this.setState({
      searchQuery: e.target.value
    })
    this.props.onChange(e.target.value)
  };

  render() {
    return (
      <section className="searchbar-wrapper">  
        <label for="searchbar" className="">Filter by:</label>
        <input type="search"
          className=""  
          id="" 
          name="searchbar" 
          placeholder="" 
          value={this.state.searchQuery} 
          autocomplete="off"/>
      </section>
    );
  }
}

export default SearchFilter;
