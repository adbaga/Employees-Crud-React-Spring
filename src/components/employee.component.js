import React, { Component } from "react";
import EmployeeDataService from "../services/employees.service"

// export default class Employee extends Component {
//   constructor(props) {
//     super(props);
//     this.onChangeFirstname = this.onChangeFirstname.bind(this);
//     this.onChangeLastname = this.onChangeLastname.bind(this);
//     this.onChangeEmail = this.onChangeEmail.bind(this);
//     this.onChangeTelephone = this.onChangeTelephone.bind(this);
//     this.onChangeHireDate = this.onChangeHireDate.bind(this);
//     this.onChangeActive = this.onChangeActive.bind(this);
//     this.saveEmployee = this.saveEmployee.bind(this);
//     this.newEmployee = this.newEmployee.bind(this);

//     this.state = {
//       id: null,
//       firstname: "",
//       lastname: "",
//       email: "",
//       telephone: "",
//       hireDate: null,
//       published: false,
//       active: false
//     };
//   }

//   componentDidMount() {
//     this.getEmployee(this.props.match.params.id);
//   }

//   onChangeLastname(e) {
//     const firstname = e.target.value;

//     this.setState(function(prevState) {
//       return {
//         currentEmployee: {
//           ...prevState.currentEmployee,
//           firstname: firstname,
//         }
//       };
//     });
//   }


//   onChangeTelephone(e) {
//     const telephone = e.target.value;
    
//     this.setState(prevState => ({
//       currentEmployee: {
//         ...prevState.currentEmployee,
//         telephone: telephone,
//       }
//     }));
//   }

//   getEmployee(id) {
//     EmployeeDataService.get(id)
//       .then(response => {
//         this.setState({
//           currentEmployee: response.data
//         });
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }
