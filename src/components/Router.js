import React from "react";
import {
    BrowserRouter,
    Route,
    Switch
  } from "react-router-dom";
import App from "./App";
import Fullview from "./Fullview";
import Notfound from "./Notfound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/> 
            <Route path="/article/:articleId" component={Fullview}/> 
            <Route component={Notfound}/> 
        </Switch>
    </BrowserRouter>
    
)

export default Router;

