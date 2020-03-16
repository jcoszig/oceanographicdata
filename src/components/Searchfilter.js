import React, { Component } from "react";
import PropTypes from "prop-types";
import {debounce} from "../helpers";
 
class SearchFilter extends Component {
  
  // Typecheck 
  static propTypes = {
    updateSearchQuery: PropTypes.func
  }

  // Begin filtering once string is > 3 char 
  handleChange = debounce(searchTerm => {
    // return searchTerm.length > 3 ? this.props.updateSearchQuery(searchTerm) : false;
    return searchTerm.length > 3 ? this.props.updateSearchQuery(searchTerm) : false;
  }, 500)

  render() {
    return (
      <section className="searchbar-wrapper">  
        <label htmlFor="searchbar" className="searchbar-title">
          <h1>Filter by:</h1>
        </label>
        <input type="search"
          id="searchbar-input" 
          name="searchbar" 
          onChange={e => {this.handleChange(e.target.value)}}
          autoComplete="off"/>
          <i className="fas fa-search"></i>
      </section>
    );
  }  
}

export default SearchFilter;
