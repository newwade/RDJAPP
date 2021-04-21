import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./css/navbar.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navTitle: "User",
    };
  }
  render() {
    const { user, logout } = this.props;
    return (
      <div className="navbar">
        <h4 className="navbar__title">{this.state.navTitle}</h4>
        <div className="navbar_link">
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
          {user ? (
            <Link
              className="linked"
              onClick={() => {
                logout();
                sessionStorage.removeItem("token");
              }}
            >
              <h4>LOGOUT</h4>
            </Link>
          ) : (
            <Link
              to="/login"
              className="linked"
              onClick={() => {
                this.setState({ navTitle: "login  " });
              }}
            >
              <h4>LOGIN</h4>
            </Link>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: "LOGOUT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
