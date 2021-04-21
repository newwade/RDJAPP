import React, { Component } from "react";
import swal from "sweetalert";
import Modal from "react-modal";
import "./App.css";
class EditPepModal extends Component {
  constructor(props) {
    super(props);
    this.state = { dept: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/app/dept/")
      // fetch(process.env.REACT_APP_API + "dept")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({ dept: data });
      });
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/app/emp/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        empId: event.target.empId.value,
        empName: event.target.empName.value,
        department: event.target.department.value,
        dateJoin: event.target.dateJoin.value,
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
          className="modal__container2"
          isOpen={this.props.show}
          onRequestClose={this.props.onHide}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>EDIT MEMBERS</div>
          <form onSubmit={this.handleSubmit} className="modal__form">
            <input type="text" placeholder="ID" name="empId" />
            <input type="text" placeholder="NAME" name="empName" />
            <input type="text" placeholder="DEPT" name="department" />
            <input type="text" placeholder="D>O>J" name="dateJoin" />

            <button>SUBMIT</button>
            <button onClick={this.props.onHide}>CLOSE</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default EditPepModal;
