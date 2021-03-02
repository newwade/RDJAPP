import React, { useEffect, useState, Component } from "react";
import "./App.css";

export default function UserVieUserView() {
  const [state, setState] = useState([]);
  const getFieldData = () => {
    fetch(process.env.REACT_APP_API + "dept/")
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
      className="userViewField"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
        {state.map((data) => (
          <tr key={data.empId}>
            <td>{data.deptID}</td>
            <td>{data.deptName}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
