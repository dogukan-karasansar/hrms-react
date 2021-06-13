import axios from "axios";

export default class Login {
  login = (email, password) => {
    return axios.post(
      "http://localhost:90/api/auth/login?email=" +
        email +
        "&password=" +
        password
    );
  };
}
