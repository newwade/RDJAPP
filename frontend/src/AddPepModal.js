import React, { Component } from "react";
import swal from "sweetalert";
class AddPepModal extends Component {
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
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        empId: null,
        empName: event.target.empName.value,
        department: event.target.department.value,
        dateJoin: event.target.dateJoin.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        swal("Success", data, "Done");
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    const myStyles = {
      width: "50%",
      marginLeft: "100px",
      marginBottom: "10px",
      padding: "5px",
    };
    return (
      <div className="container">
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
          onSubmit={this.handleSubmit}
        >
          <input
            style={myStyles}
            type="text"
            placeholder="name"
            name="empName"
          />
          <input
            style={myStyles}
            type="text"
            placeholder="dept"
            name="department"
          />
          {/* <select name="department" value={this.props.department}>
            {this.state.dept.map((dep) => (
              <option key={dep.deptID}>{dep.deptName}</option>
            ))}
          </select> */}
          <input
            style={myStyles}
            type="text"
            placeholder="date"
            name="dateJoin"
          />
          <div>
            <input
              type="submit"
              value="Add"
              style={{
                width: "50%",
                border: "none",
                background: "#0275d8",
                color: "white",
                padding: "5px",
                marginTop: "20px",
                marginLeft: "100px",
              }}
            />
          </div>
        </form>
        {/* <Image
          width="200px"
          height="200px"
          src={
            "https://www.pinclipart.com/picdir/middle/133-1332472_avatar-client-customer-account-male-man-person-login.png"
          }
        /> */}
      </div>
    );
  }
}

export default AddPepModal;
