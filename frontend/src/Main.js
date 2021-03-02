import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ContactsIcon from "@material-ui/icons/Contacts";
import BusinessIcon from "@material-ui/icons/Business";
import PersonIcon from "@material-ui/icons/Person";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import "./css/main.css";
class Main extends Component {
  state = {};
  render() {
    const myStyle = {
      fontSize: 100,
      color: "orange",
    };
    return (
      // <div className="mt-10 d-flex justify-content-left">
      <div className="main">
        <div className="main__sidebar">
          <p>{/* <HomeIcon /> */}</p>
          <p>{/* <ContactsIcon /> */}</p>
          <p>{/* <BusinessIcon /> */}</p>
        </div>
        <div className="main__cards">
          <div className="main__cards__admin">
            <PersonIcon style={myStyle} />
          </div>
          <div className="main__cards__mem">
            <Link to="/user">
              <PersonOutlineIcon style={myStyle} />
            </Link>
          </div>
          <div className="main__cards__dep">
            <Link to="/user1">
              <BusinessIcon style={myStyle} />
            </Link>
          </div>
          <div
            style={{ background: "rgb(48, 48, 48)" }}
            className="main__cards__dep"
          >
            <BusinessIcon style={myStyle} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
