import React, { Component } from "react";
import PropTypes from "prop-types";
import {debounce} from "../helpers";
 
class SearchFilter extends Component {
  // Typecheck 
  static propTypes = {
    updateSearchQuery: PropTypes.func
  }

  handleChange = debounce(searchTerm => {
    /* Begin filtering once string is > 3 char */
    return searchTerm.length > 3 ? this.props.updateSearchQuery(searchTerm) : false;
  }, 500)

  render() {
    return (
      <section className="searchbar-wrapper">  
        <label htmlFor="searchbar" className="searchbar-title">Filter by:</label>
        <input type="search"
          className=""  
          id="" 
          name="searchbar" 
          onChange={e => {this.handleChange(e.target.value)}}
          autoComplete="off"/>
      </section>
    );
  }  
}

export default SearchFilter;
