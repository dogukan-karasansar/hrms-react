import axios from "axios";
import moment from "moment";
import { Alert } from "rsuite";

export default class JobAdvertisement {
  getJobAdvertisements = () => {
    return axios.get(
      "http://localhost:90/api/job-advertisement/activated-job-advertisements"
    );
  };

  getJobAdvertisement = (id) => {
    return axios.get(
      "http://localhost:90/api/job-advertisement/getjobadvertisement?id=" + id
    );
  };

  add = (
    id,
    description,
    minimumSalary,
    maximumSalary,
    typeOfWork,
    runtime,
    deadline,
    numberOfOpenPosition,
    city,
    position
  ) => {
    return axios
      .post("http://localhost:90/api/job-advertisement/add", {
        activated: false,
        applicationDeadline: moment(deadline).format("YYYY-MM-DD"),
        city: {
          id: city,
        },
        description: description,
        employer: {
          id: id,
        },
        jobPosition: {
          id: position,
        },
        maximumSalary: maximumSalary,
        minimumSalary: minimumSalary,
        numberOfOpenPosition: numberOfOpenPosition,
        runtime: runtime,
        typeOfWork: typeOfWork,
      })
      .then((res) => {
        Alert.success("İş ilanı başarıyla eklendi");
        return true;
      })
      .catch((e) => {
        Alert.error("Bir hata oluştu lütfen daha sonra tekrar deneyin!");
        console.log(e);
      });
  };
}
