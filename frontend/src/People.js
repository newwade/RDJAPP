import React, { Component } from "react";
import swal from "sweetalert";
import { Button, Table } from "react-bootstrap";
import AddPepModal from "./AddPepModal";
import EditPepModal from "./EditPepModal";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showModal: false,
      editShowModal: false,
    };
  }
  getEmpData() {
    fetch("http://127.0.0.1:8000/app/emp/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data,
        });
      });
  }

  componentDidMount() {
    this.getEmpData();
  }
  deleteField(empId) {
    swal({
      title: "Are you sure?",
      text: "It will be permanently deleted !",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(
      fetch("http://127.0.0.1:8000/emp/" + empId, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
    );
  }
  render() {
    const { data, empId, empName, dateJoin, department } = this.state;
    let closeModal = () => {
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
      <div className="people">
        <table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Dept</th>
              <th>Date</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr key={data.empId}>
                <td>{data.empId}</td>

                <td>{data.empName}</td>
                <td>{data.department}</td>
                <td>{data.dateJoin}</td>

                {/* <td>Edit/Delete</td> */}
                <Button
                  onClick={() => {
                    this.setState({
                      editShowModal: true,
                      empId: data.empId,
                      empName: data.empName,
                      department: data.department,
                      dateJoin: data.dateJoin,
                    });
                  }}
                  className="mr-2 mt-2"
                  variant="info"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    this.deleteField(data.empId);
                  }}
                  className="mr-2 mt-2"
                  variant="danger"
                >
                  Delete
                </Button>
                <EditPepModal
                  show={this.state.editShowModal}
                  onHide={editModalClose}
                  empId={empId}
                  empName={empName}
                  department={department}
                  dateJoin={dateJoin}
                />
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button
          className="edit_btn"
          variant="primary"
          onClick={() => {
            this.setState({
              showModal: true,
            });
          }}
        >
          Add
        </button> */}
        <AddPepModal show={this.state.showModal} onHide={closeModal} />
      </div>
    );
  }
}

export default People;
