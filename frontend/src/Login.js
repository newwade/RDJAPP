import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
import Field from "./Field";
import "./App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/app/user/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        deptId: null,
        userName: event.target.userName.value,
        userPass: event.target.userPass.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data === "YOU'RE IN") {
          this.setState({ user: true });
          swal("Done", data);
          this.props.history.push("deps/");
          // return <Redirect to="http://localhost:3000/dept" />;
        } else {
          swal("Error", data, "warning");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  handleLogout() {
    this.setState({ user: null });
  }

  render() {
    return (
      <div>
        {/* {this.state.user ? "true" : "false"} */}
        {!this.state.user && (
          <form className="login" onSubmit={this.handleSubmit}>
            <input
              className="login__submit"
              type="text"
              placeholder="Name"
              name="userName"
            />
            <input
              className="login__submit"
              type="password"
              placeholder="password"
              name="userPass"
            />
            <input
              className="login__submit"
              type="submit"
              value="submit"
              style={{ color: "white", border: "none", background: "#0275d8" }}
            />
            <h4 style={{ textAlign: "center" }}>ADMIN LOGIN</h4>
          </form>
        )}
        {/* )} */}
      </div>
    );
  }
}

export default Login;
