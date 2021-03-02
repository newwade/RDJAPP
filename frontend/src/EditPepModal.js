import React, { Component } from "react";
import swal from "sweetalert";
import { Modal, Row, Col, Button, Form, Image } from "react-bootstrap";
class EditPepModal extends Component {
  constructor(props) {
    super(props);
    this.state = { dept: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // imageFileName = "gender2.jpg";
  componentDidMount() {
    fetch("http://127.0.0.1:8000/emp/dept/")
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
        imageFileName: this.imageFileName,
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
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Members
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={5}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="empId">
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                      type="text"
                      name="empId"
                      placeholder="emp_Id"
                      required
                      disabled
                      defaultValue={this.props.empId}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="empName">
                    <Form.Label>Member Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="empName"
                      placeholder="emp_Name"
                      required
                      defaultValue={this.props.empName}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="department">
                    <Form.Label>Dept</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue={this.props.department}
                    >
                      {this.state.dept.map((dep) => (
                        <option key={dep.deptID}>{dep.deptName}</option>
                      ))}
                    </Form.Control>
                    <Form.Group controlId="dateJoin">
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="dateJoin"
                        placeholder="d:o:j"
                        required
                        defaultValue={this.props.dateJoin}
                      />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group>
                    <Button variant="primary" type="submit">
                      Add
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
              <Col sm={5}>
                <Image
                  width="200px"
                  height="200px"
                  src={
                    "https://www.pinclipart.com/picdir/middle/133-1332472_avatar-client-customer-account-male-man-person-login.png"
                  }
                  // src={`http://127.0.0.1:8000/media/${this.props.imageFileName}`}
                />
                {/* <input type="file" onChange={this.handleFile} /> */}
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditPepModal;
