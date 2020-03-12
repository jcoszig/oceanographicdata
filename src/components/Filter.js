import React, { Component } from "react";
 
class Filter extends Component {
  render() {
    return (
      <section className="search-dropdown">  
        <dt>
        <a href="#">
          <span className="">Select</span>    
          <p className="multiSel"></p>  
        </a>
        </dt>

        <dd>
            <div className="filter-options">
                <ul>
                    <li>
                        <input type="checkbox" value="One" />One</li>
                    <li>
                        <input type="checkbox" value="Two" />Two</li>
                    <li>
                        <input type="checkbox" value="Three" />Three</li>
                </ul>
            </div>
        </dd>
        <button>Confirm Filters</button>
      </section>
    );
  }
}
 
export default Filter;
