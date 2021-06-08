import axios from "axios";

export default class EmployerService {
  getEmployers() {
    return axios.get("http://localhost:90/api/employer/getall");
  }
}
