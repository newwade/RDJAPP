import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./css/navbar.css";
import { Link } from "react-router-dom";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navTitle: "User",
    };
  }
  render() {
    return (
      <div className="navbar">
        <h4 style={{ color: "white" }}>{this.state.navTitle}</h4>
        <div className="navabar_link">
          <Link
            className="linked"
            to="/"
            onClick={() => {
              this.setState({ navTitle: "Home" });
            }}
          >
            <h4>Home</h4>
          </Link>
          <Link
            className="linked"
            to="/People"
            onClick={() => {
              this.setState({ navTitle: "Members" });
            }}
          >
            <h4>Members</h4>
          </Link>
          <Link
            className="linked"
            to="/Field"
            onClick={() => {
              this.setState({ navTitle: "Fields" });
            }}
          >
            <h4>Fields</h4>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
