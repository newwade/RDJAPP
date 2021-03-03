import React, { Component } from "react";
import { Modal, Row, Col, Button, Form } from "react-bootstrap";
import swal from "sweetalert";
class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/app/dept/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        deptID: event.target.deptID.value,
        deptName: event.target.deptName.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        swal("Done", data, "success");
        this.props.history.push("/deps/");
      })
      .catch((error) => {
        alert(error);
      });
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="deptID" placeholder="Enter the  id" />
          <input type="text" name="deptName" placeholder="Department name" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default EditModal;
