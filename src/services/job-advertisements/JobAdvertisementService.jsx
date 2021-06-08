import axios from "axios";

export default class JobAdvertisement {
  getJobAdvertisements = () => {
    return axios.get(
      "http://localhost:90/api/job-advertisement/activated-job-advertisements"
    );
  };
}
