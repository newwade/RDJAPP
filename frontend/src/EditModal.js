import React, { Component } from "react";
import Modal from "react-modal";
import swal from "sweetalert";
import "./App.css";
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
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    const customStyles = {
      content: {
        top: "25%",
        left: "37%",
        bottom: "auto",
        right: "auto",
        transition: "0.5s all ease",
        tranform: "translate(-50%,-50%)",
      },
    };
    return (
      <div>
        <Modal
          className="modal__container"
          isOpen={this.props.show}
          onRequestClose={this.props.onHide}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>EDIT FIELD</div>
          <form onSubmit={this.handleSubmit} className="modal__form">
            <input type="text" placeholder="ID" name="deptID" />
            <input type="text" placeholder="DEPT" name="deptName" />
            <button>SUBMIT</button>
            <button onClick={this.props.onHide}>CLOSE</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default EditModal;
