import React, { Component } from "react";
import EmployeeDataService from "../services/employees.service"

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTelephone = this.onChangeTelephone.bind(this);
    this.onChangeHireDate = this.onChangeHireDate.bind(this);
    this.onChangeActive = this.onChangeActive.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    this.newEmployee = this.newEmployee.bind(this);

    this.state = {

        currentEmployee:{

            id: null,
            firstname: "",
            lastname: "",
            email: "",
            telephone: "",
            hireDate: null,
            active: false
        },

        message: ""
    
    };
  }

  componentDidMount() {
    this.getEmployee(this.props.match.params.id);
  }

  onChangeLastname(e) {
    const lastname = e.target.value;

    this.setState(function(prevState) {
      return {
        currentEmployee: {
          ...prevState.currentEmployee,
          firstname: lastname,
        }
      };
    });
  }

  onChangeFirstname(e) {
    const firstname = e.target.value;

    this.setState(function(prevState) {
      return {
        currentEmployee: {
          ...prevState.currentEmployee,
          firstname: firstname,
        }
      };
    });
  }


  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(function(prevState) {
      return {
        currentEmployee: {
          ...prevState.currentEmployee,
          email: email,
        }
      };
    });
  }



  onChangeTelephone(e) {
    const telephone = e.target.value;
    
    this.setState(prevState => ({
      currentEmployee: {
        ...prevState.currentEmployee,
        telephone: telephone,
      }
    }));
  }


  onChangeHireDate(e) {
    const hireDate = e.target.value;
    
    this.setState(prevState => ({
      currentEmployee: {
        ...prevState.currentEmployee,
        hireDate: hireDate,
      }
    }));
  }

  onChangeActive(e) {
    const active = e.target.value;
    
    this.setState(prevState => ({
      currentEmployee: {
        ...prevState.currentEmployee,
        active: active,
      }
    }));
  }

  getEmployee(id) {
    EmployeeDataService.get(id)
      .then(response => {
        this.setState({
          currentEmployee: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateActive(status) {
    var data = {
      id: this.state.currentEmployee.id,
      firstname: this.state.currentEmployee.firstname,
      lastname: this.state.currentEmployee.lastname,
      email: this.state.currentEmployee.email,
      telephone: this.state.currentEmployee.telephone,
      hireDate: this.state.currentEmployee.hireDate,
      active: status
    };

    EmployeeDataService.update(this.state.currentEmployee.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentEmployee: {
            ...prevState.currentEmployee,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateEmployee() {
    EmployeeDataService.update(
      this.state.currentEmployee.id,
      this.state.currentEmployee
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The employee was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteEmployee() {    
    EmployeeDataService.delete(this.state.currentEmployee.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/employees')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentEmployee } = this.state;

    return (
      <div>
        {currentEmployee ? (
          <div className="edit-form">
            <h4>Employee </h4>
            <form>
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  value={currentEmployee.firstname}
                  onChange={this.onChangeFirstname}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  value={currentEmployee.lastname}
                  onChange={this.onChangelastname}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentEmployee.active ? "Active" : "Not Active"}
              </div>
            </form>

            {currentEmployee.active ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateActive(false)}
              >
                Deactivate
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Activate
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteEmployee}
            >
              Delete
            </button> 

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateEmployee}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}




