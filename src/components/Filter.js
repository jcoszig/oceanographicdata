import React, { Component } from "react";
 
class Filter extends Component {
  render() {
    return (
      <aside className={this.props.mobilemenu ? 'search-dropdown': 'search-dropdown active'}>  
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
        <div  className={this.props.mobilemenu ? 'search-dropdown-mobile-close': 'search-dropdown-mobile-close active'}
              onClick={this.props.toggleMobileMenu}>
          <i className="fas fa-times"></i>
          {/* todo: trigger setting of state.mobileMenu via this button */}
        </div>
      </aside>
    );
  }
}
 
export default Filter;
