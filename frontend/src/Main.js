import React, { Component } from "react";
import { Link } from "react-router-dom";
import BusinessIcon from "@material-ui/icons/Business";
import PersonIcon from "@material-ui/icons/Person";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Footer from "./footer";
import AOS from "aos";
import "./css/main.css";
class Main extends Component {
  state = {};
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }
  render() {
    const myStyle = {
      fontSize: 100,
      color: "white",
    };

    return (
      <div>
        <div className="main">
          <div className="main__sidebar">
            <p>{/* <HomeIcon /> */}</p>
            <p>{/* <ContactsIcon /> */}</p>
            <p>{/* <BusinessIcon /> */}</p>
          </div>
          <div className="main__sub">
            <div className="main__text">
              <h3>README</h3>
              <p>
                Django is one of the most complete web development frameworks
                available. It’s fast, secure, and scalable. With the power of
                Python, we can get an application up and running in just about
                no time. It manages everything from the database to the final
                HTML sent to the client. However, with the advent of Single-page
                applications (SPAs), it’s become increasingly common to create
                applications that use Django only to provide an API that
                responds to JSON data consumed by applications developed in the
                most varied JavaScript frameworks. It’s actually a trend that
                the majority of languages are following. This architecture (that
                separates the front from the back-end) allows a better
                decoupling of them both, with teams that can develop in their
                domains completely independently. It also enables multiple
                client apps to interact with the same API, while ensuring data
                integrity and business rules, and a variety of user interfaces.
                On the other hand, two different projects generate even more
                work: two separate deployments, two different environments to
                configure, etc. One way to simplify this is to use Django’s own
                capabilities to serve static files. After all, the front end
                application is nothing more than a set of files of this type.
              </p>
              <div data-aos="fade-in">
                <p>
                  Django is one of the most complete web development frameworks
                  available. It’s fast, secure, and scalable. With the power of
                  Python, we can get an application up and running in just about
                  no time. It manages everything from the database to the final
                  HTML sent to the client. However, with the advent of
                  Single-page applications (SPAs), it’s become increasingly
                  common to create applications that use Django only to provide
                  an API that responds to JSON data consumed by applications
                  developed in the most varied JavaScript frameworks.
                </p>
              </div>
              <div className="main__cards">
                <div data-aos="zoom-in" className="main__cards__admin">
                  <PersonIcon style={myStyle} />
                </div>
                <div data-aos="zoom-in" className="main__cards__mem">
                  <Link to="/user">
                    <PersonOutlineIcon style={myStyle} />
                  </Link>
                </div>
                <div data-aos="zoom-in" className="main__cards__dep">
                  <Link to="/user1">
                    <BusinessIcon style={myStyle} />
                  </Link>
                </div>
                <div
                  style={{ background: "rgb(48, 48, 48)" }}
                  data-aos="zoom-in"
                  className="main__cards__dep"
                >
                  <BusinessIcon style={myStyle} />
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
