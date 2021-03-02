import React, { useEffect, useState, Component } from "react";
import "./App.css";

export default function UserView() {
  const [state, setState] = useState([]);
  const getFieldData = () => {
    fetch(process.env.REACT_APP_API + "emp/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          setState(data);
        } else {
          setState();
        }
      });
  };
  useEffect(() => {
    getFieldData();
  }, []);

  return (
    <div
      className="userview"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Field</th>
          <th>D.O.J</th>
        </tr>
        {state.map((data) => (
          <tr key={data.empId}>
            <td>{data.empId}</td>
            <td>{data.empName}</td>
            <td>{data.department}</td>
            <td>{data.dateJoin}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
