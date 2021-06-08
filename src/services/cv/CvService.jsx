import axios from "axios";

export default class CvService {
    getCv(id) {
        return axios.get("http://localhost:90/get-seeker-cv?jobSeekerId=" + id);
    }
}