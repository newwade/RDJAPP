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
              Edit department
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={5}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="deptID">
                    <Form.Label>Department Id</Form.Label>
                    <Form.Control
                      type="text"
                      name="deptID"
                      placeholder="deptID"
                      defaultValue={this.props.depId}
                      required
                      disabled
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="deptName">
                    <Form.Label>Department Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="deptName"
                      placeholder="Dept_Name"
                      defaultValue={this.props.depName}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Button variant="primary" type="submit">
                      Edit
                    </Button>
                  </Form.Group>
                </Form>
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

export default EditModal;
