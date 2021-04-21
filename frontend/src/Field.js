import React, { Component } from "react";
import { Button } from "react-bootstrap";
import FieldModal from "./FieldModal";
import EditModal from "./EditModal";
import swal from "sweetalert";
import Login from "./Login";
import { Redirect } from "react-router-dom";
import "./css/table.css";
import { connect } from "react-redux";

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
      fetch("http://127.0.0.1:8000/app/dept/" + depId, {
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
  componentDidUpdate() {
    this.getFieldData();
  }
  render() {
    const { user, setUser, removeUser } = this.props;
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
      <div>
        {user ? (
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
                  <Button
                    onClick={() => {
                      this.setState({
                        editShowModal: true,
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

            <FieldModal />
          </div>
        ) : (
          <h1> Login To Submit</h1>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  setUser: () => dispatch({ type: "LOGIN" }),
  removeUser: () => dispatch({ type: "LOGOUT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
