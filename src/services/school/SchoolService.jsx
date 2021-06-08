import axios from "axios";

export default class SchoolService {
  getSchools() {
    return axios.get("http://localhost:90/api/schools/get-reversed-sorted");
  }
}
