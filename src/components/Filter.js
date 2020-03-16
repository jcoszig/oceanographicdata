import React, { Component } from "react";
 
class Filter extends Component {
  render() {
    return (
      <aside className="search-dropdown">  
        <h1>Search Filters</h1>
        <div className="filter-options">
          <h4>todo: filter type title</h4>
          <ul>
              <li><input type="checkbox" value="One" />One</li>
              <li><input type="checkbox" value="Two" />Two</li>
              <li><input type="checkbox" value="Three" />Three</li>
          </ul>
        </div>
        <button>Confirm Filters</button>
        <div className="search-dropdown-mobile-close">
          <i className="fas fa-times"></i>
        </div>
      </aside>
    );
  }
}
 
export default Filter;
