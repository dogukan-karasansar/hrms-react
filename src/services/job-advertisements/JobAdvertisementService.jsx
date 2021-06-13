import axios from "axios";

export default class JobAdvertisement {
  getJobAdvertisements = () => {
    return axios.get(
      "http://localhost:90/api/job-advertisement/activated-job-advertisements"
    );
  };

  add = (id) => {
    return axios
      .post("http://localhost:90/api/job-advertisement/add", {
        activated: false,
        applicationDeadline: "2020-08-14",
        city: {
          id: 1,
        },
        description: "description",
        employer: {
          id: id,
        },
        phone: "05304604889",
        jobPosition: {
          id: 1,
        },
        maximumSalary: 0,
        minimumSalary: 0,
        numberOfOpenPosition: 2,
        runtime: "Tam Zamanlı",
        typeOfWork: "Uzaktan",
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
}
