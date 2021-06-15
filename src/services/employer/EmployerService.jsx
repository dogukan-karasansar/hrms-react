import axios from "axios";

export default class EmployerService {
  getEmployers() {
    return axios.get("http://localhost:90/api/employer/getall");
  }

  getEmployer(id) {
    return axios.get("http://localhost:90/api/employer/get-employer?id="+id);
  }
}
