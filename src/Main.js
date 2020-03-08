import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import App from "./components/App";
import Filter from "./components/Filter";
import Map from "./components/Map";
import Preview from "./components/Preview";
import Search from "./components/Search";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">App</NavLink></li>
            <li><NavLink to="/filter">Filter</NavLink></li>
            <li><NavLink to="/map">Map</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={App}/>
            <Route path="/filter" component={Filter}/>
            <Route path="/map" component={Map}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;

