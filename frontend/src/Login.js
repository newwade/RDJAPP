import React, { Component, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function handleSubmit(event) {
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
        if (data === "LOGGED") {
          dispatch({ type: "LOGIN" });
          const newData = sessionStorage.setItem("token", JSON.stringify(data));
          // console.log(newData.data);
          // this.setState({ user: true });
          history.push("/");
        } else {
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <div>
      {!user ? (
        <form className="login" onSubmit={handleSubmit}>
          <h3>Sign-in </h3>
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
          <p>Sign-in with your username and password</p>
          <input
            className="login__submit"
            type="submit"
            value="Sign in"
            style={{
              color: "black",
              border: "1px solid black",
              background: "#FF9900",
            }}
          />
        </form>
      ) : (
        <button onClick={() => dispatch({ type: "LOGOUT" })}>LOGOUT</button>
      )}
    </div>
  );
}

export default Login;
// import React, { Component, useState } from "react";
// import PropTypes from "prop-types";

// import "./App.css";
// async function loginUser(credentials) {
//   return fetch("http://localhost:8080/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

// export default function Login(props) {
//   const { setToken } = props;
//   const [username, setUsername] = useState();
//   const [password, setPassword] = useState();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = await loginUser(username, password);
//     // console.log(token);
//     setToken(token);
//   };

//   return (
//     <div className="login-wrapper">
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>Username</p>
//           <input type="text" onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <label>
//           <p>Password</p>
//           <input
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }
// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
