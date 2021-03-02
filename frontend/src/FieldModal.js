import React, { Component } from "react";
import swal from "sweetalert";
class FieldModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/app/dept/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        deptId: null,
        deptName: event.target.deptName.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        swal("Done", data, "success");
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    const myStyles = {
      border: "none",
      background: "#0275d8",
      color: "white",
      padding: "7px",
    };
    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          style={{ marginTop: "20px", marginLeft: "100px" }}
        >
          <input
            type="text"
            placeholder="name"
            name="deptName"
            style={{ padding: "5px", width: "50%" }}
          />
          <input type="submit" value="Add" style={myStyles} />
        </form>
      </div>
    );
  }
}

export default FieldModal;
