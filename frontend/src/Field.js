import React, { Component } from "react";
import { Button } from "react-bootstrap";
import FieldModal from "./FieldModal";
import EditModal from "./EditModal";
import swal from "sweetalert";
import Login from "./Login";
import "./css/table.css";
class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dept: [],
      showModal: false,
      editShowModal: false,
      navTitle: "",
    };
  }

  getFieldData() {
    fetch("http://127.0.0.1:8000/app/dept/")
      // fetch(process.env.REACT_APP_API + "dept")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          this.setState({ dept: data });
        } else {
          this.setState({ dept: "" });
        }
      });
  }
  deleteField(depId) {
    swal({
      title: "Are you sure?",
      text: "It will be permanently deleted !",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(
      fetch("http://127.0.0.1:8000/dept/" + depId, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
    );
  }
  componentDidMount() {
    this.getFieldData();
  }
  // componentDidUpdate() {
  //   this.getFieldData();
  // }
  render() {
    const { dept, depName, depId } = this.state;
    let modalClose = () => {
      this.setState({
        showModal: false,
      });
    };
    let editModalClose = () => {
      this.setState({
        editShowModal: false,
      });
    };
    return (
      <div className="field">
        <table className="mt-4" striped bordered hover size="lg">
          <tr>
            <th>FieldId</th>
            <th>FieldName</th>
            <th>Options</th>
          </tr>
          {dept.map((data) => (
            <tr key={data.deptID}>
              <td>{data.deptID}</td>

              <td>{data.deptName}</td>
              {/* <td>Edit/Delete</td> */}
              <Button
                onClick={() => {
                  this.setState({
                    editShowModal: true,
                    depId: data.deptID,
                    depName: data.deptName,
                  });
                }}
                className="mt-2"
                variant="info"
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  this.deleteField(data.deptID);
                }}
                className=" mt-2  ml-3"
                variant="danger"
              >
                Delete
              </Button>

              <EditModal
                show={this.state.editShowModal}
                onHide={editModalClose}
                depId={depId}
                depName={depName}
              />
            </tr>
          ))}
        </table>

        <FieldModal show={this.state.showModal} onHide={modalClose} />
      </div>
    );
  }
}

export default Field;
