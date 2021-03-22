import http from "../http-common";

class EmployeesDataService {
  getAll() {
    return http.get("/employees");
  }

  get(id) {
    return http.get(`/employees/${id}`);
  }

  create(data) {
    return http.post("/employees", data);
  }

  update(id, data) {
    return http.put(`/employees/${id}`, data);
  }

  delete(id) {
    return http.delete(`/employees/${id}`);
  }

  deleteAll() {
    return http.delete(`/employees`);
  }

  findByFName(firstname) {
    return http.get(`/employees?firstname=${firstname}`);
  }

  findByLName(lastname) {
    return http.get(`/employees?lastname=${lastname}`);
  }
}

export default new EmployeesDataService();