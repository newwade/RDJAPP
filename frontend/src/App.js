import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./Main";
import Navigation from "./Navigation";
import People from "./People";
import UserView from "./Userview";
import Login from "./Login";
import UserViewFields from "./UserMemView";
import Field from "./Field";


function App() {
  return (
    <div>
      <Router>
        <div className="App">
          {/* <h2>React App</h2> */}
          <Navigation />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/People" component={People} />
            <Route path="/Field" component={Login} />
            <Route path="/dept" component={Field} />
            <Route path="/user" component={UserView} />
            <Route path="/user1" component={UserViewFields} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
