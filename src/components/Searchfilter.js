import React, { Component } from "react";
import PropTypes from "prop-types";
 
class SearchFilter extends Component {

  // Typecheck 
  static propTypes = {
    updateSearchQuery: PropTypes.func
  }
  // handleChange = e => {

  //   // this.props.onChange(e.target.value)
  //   const updatedSearchQuery = {
  //     ...this.props.searchQuery,
  //     [e.currentTarget.name]: e.currentTarget.value
  //   };
  //   // update state
  //   this.props.updateSearchQuery(updatedSearchQuery);
  // };

  handleChange = e => {
    let searchQuery = e.target.value;
    let timeout = null;

    /* Begin filtering once string is > 3 char */
    return searchQuery.length > 3 ? this.props.updateSearchQuery(searchQuery) : false;
  };

  render() {
    return (
      <section className="searchbar-wrapper">  
        <label htmlFor="searchbar" className="searchbar-title">Filter by:</label>
        <input type="search"
          className=""  
          id="" 
          name="searchbar" 
          onChange={this.handleChange}
          autoComplete="off"/>
      </section>
    );
  }  
}

export default SearchFilter;
