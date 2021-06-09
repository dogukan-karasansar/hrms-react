import axios from "axios";

export default class JobPositionService {
  getJobPositions() {
    return axios.get("http://localhost:90/api/job-positions/getall");
  }
}
