import axios from "axios";
import React from "react";

export default class JobSeekerService {
  getJobSeekers() {
    return axios.get("http://localhost:90/api/job-seeker/getall");
  }
}
