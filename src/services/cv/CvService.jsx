import axios from "axios";

export default class CvService {
  getCvs(id) {
    return axios.get("http://localhost:90/get-seeker-cv?jobSeekerId=" + id);
  }

  getCv(id) {
    return axios.get("http://localhost:90/get-cv?id=" + id);
  }
}
