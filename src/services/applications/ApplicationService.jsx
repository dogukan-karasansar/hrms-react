import axios from "axios";

export default class ApplicationService {
  getApplications(id) {
    return axios.get(
      "http://localhost:90/api/application/getApplications?jobAdvertisementId=" +
        id
    );
  }

  add(employerId, jobSeekerId, jobAdvertisementId) {
    return axios.post("http://localhost:90/api/application/add", {
      employer: {
        id: employerId,
      },
      jobSeeker: {
        id: jobSeekerId,
      },
      jobAdvertisement: {
        id: jobAdvertisementId,
      },
    });
  }
}
