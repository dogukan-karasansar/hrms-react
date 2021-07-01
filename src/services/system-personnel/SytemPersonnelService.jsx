import axios from "axios";
import { Alert } from "rsuite";

export default class SytemPersonnelService {
  updatePersonnel(firstName, lastName, personnelId, userId, email, password) {
    return axios
      .put(
        "http://localhost:90/api/system-personnel/update-personnel",
        {
          firstName: firstName,
          id: personnelId,
          lastName: lastName,
          user: {
            email: email,
            emailVerified: true,
            id: userId,
            password: password,
          },
        },
        {
          method: "PUT",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
  }
}
