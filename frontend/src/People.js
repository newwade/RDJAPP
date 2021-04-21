import React, { Component } from "react";
import swal from "sweetalert";
import { Button, Table } from "react-bootstrap";
import AddPepModal from "./AddPepModal";
import EditPepModal from "./EditPepModal";
import { connect } from "react-redux";
import UserView from "./Userview";
import "./css/table.css";
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
  componentDidUpdate() {
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
      fetch("http://127.0.0.1:8000/app/emp/" + empId, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
    );
  }
  render() {
    const { user } = this.props;
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
      <div>
        {user ? (
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
                    <div className="people__button">
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
                    </div>
                    <EditPepModal
                      show={this.state.editShowModal}
                      onHide={editModalClose}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
            <AddPepModal show={this.state.showModal} onHide={closeModal} />
          </div>
        ) : (
          <h1>Login To Submit</h1>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(People);
