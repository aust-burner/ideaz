import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./navigation/navbar";
import Home from "./pages/home";
import Ideaz from "./pages/ideaz";
import Contact from "./pages/contact";
import IdeazDetail from "./ideaz/ideaz-detail";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <h1>Ideaz</h1>
            <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
            <Navbar />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/ideaz" component={Ideaz} />
              <Route path="/contact" component={Contact} />
              <Route
                exact
                path="/ideaz/:slug"
                component={IdeazDetail}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}