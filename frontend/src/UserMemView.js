import React, { useEffect, useState, Component } from "react";
import "./App.css";

export default function UserVieUserView() {
  const [state, setState] = useState([]);
  const getFieldData = () => {
    fetch(process.env.REACT_APP_API + "dept/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  };
  useEffect(() => {
    getFieldData();
  }, []);

  return (
    <div className="userViewField">
      <div>
        <h4>DEPARTMENTS</h4>
      </div>
      <div className="userViewField__item">
        {state.map((item) => (
          <div class="grid-item">{item.deptName.toUpperCase()}</div>
        ))}
      </div>
    </div>
  );
}
