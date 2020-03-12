import React from "react";
import {
    BrowserRouter,
    Route,
    Switch
  } from "react-router-dom";
import App from "./App";
import Article from "./Article";
import Notfound from "./Notfound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/> 
            <Route path="/article/:articleId" component={Article}/> 
            <Route component={Notfound}/> 
        </Switch>
    </BrowserRouter>
    
)

export default Router;

