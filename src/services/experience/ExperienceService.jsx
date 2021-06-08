import axios from "axios";

export default class ExperienceService {
  getExperiences() {
    return axios.get("http://localhost:90/get-reversed-all");
  }
}
