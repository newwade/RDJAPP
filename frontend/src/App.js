import React, { Component, useEffect, useState } from "react";
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
import EditModal from "./EditModal";
import userToken from "./userInfo";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [token, setToken] = useState();

  // const { token, setToken } = userToken();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // } else if (token) {
  //   dispatch({ type: "LOGIN" });
  // }
  useEffect(() => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    console.log(userToken);
    if (userToken) {
      dispatch({ type: "LOGIN" });
    }
  }, []);

  return (
    <div>
      <Router>
        <div className="App">
          <Navigation />

          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/People" component={People} />
            <Route path="/edit" component={EditModal} />

            <Route path="/Field" component={Field} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={UserView} />
            <Route path="/user1" component={UserViewFields} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
