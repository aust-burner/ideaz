import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavLink exact to="/" activeClassName="nav-link-active">
          Home
        </NavLink>

        <NavLink to="/ideaz" activeClassName="nav-link-active">
          Ideaz
        </NavLink>
        <NavLink to="/investors" activeClassName="nav-link-active">
          Investors
        </NavLink>
        <NavLink to="/contact" activeClassName="nav-link-active">
          Contact
        </NavLink>
      </div>
    );
  }
}