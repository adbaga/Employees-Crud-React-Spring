import React, { Component } from "react";
import EmployeeDataService from "../services/employees.service"

export default class AddEmployee extends Component {
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
      id: null,
      firstname: "",
      lastname: "",
      email: "",
      telephone: "",
      hireDate: null,
      published: false,
      active: false,
      submitted: false
    };
  }

  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    });
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  onChangeEmail(e) {
 


      this.setState({
        email: e.target.value

    })


   
  }

  onChangeTelephone(e) {
    this.setState({
      telephone: e.target.value
    });
  }

  onChangeHireDate(e) {
    this.setState({
      hireDate: e.target.value
    });
  }

  onChangeActive(e) {
    this.setState({
      active: e.target.value
    });
  }

  saveEmployee() {

    var data = {

      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      telephone: this.state.telephone,
      hireDate: this.state.hireDate,
      active: this.state.active,
      submitted: true
    
    
    };

    EmployeeDataService.create(data)
      .then(response => {
        this.setState({
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          email: response.data.email,
          telephone: response.data.telephone,
          hireDate: response.data.hireDate,
          active: response.data.active,


          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newEmployee() {
    this.setState({
        id: null,
        firstname: "",
        lastname: "",
        email: "",
        telephone: "",
        hireDate: "",
        published: false,
        active: false,
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newEmployee}>
              Add New Employee!
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                required
                value={this.state.firstname}
                onChange={this.onChangeFirstname}
                name="firstname"
              />
            </div>


            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                required
                value={this.state.lastname}
                onChange={this.onChangeLastname}
                name="lastname"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telephone">Telephone</label>
              <input
                type="text"
                className="form-control"
                id="telephone"
                required
                value={this.state.telephone}
                onChange={this.onChangeTelephone}
                name="telephone"
              />
            </div>


            <div className="form-group">
              <label htmlFor="hireDate">Hiring Date</label>
              <input
                type="date"
                className="form-control"
                id="hireDate"
                required
                value={this.state.hireDate}
                onChange={this.onChangeHireDate}
                name="hireDate"
              />
            </div>



            <div className="form-group">
              <label class="form-check-label" htmlFor="inlineCheckbox1">Active employee</label>
              <input
                type="checkbox"
                className="form-control"
                id="inlineCheckbox1"
                onChange={this.onChangeActive}
                name="active"
              />
            </div>

            

         

            <button onClick={this.saveEmployee} className="btn btn-success">
              Submit
            </button>

    
          </div>
        )}
      </div>
    );
  }
}