import axios from "axios";

export class FavoriteAdService {
  getFavorites(id) {
    return axios.get("http://localhost:90/get-favorites?jobSeekerId=" + id);
  }

  getCheckFavorite(jobAdvertisementId, jobSeekerId) {
    return axios.get(
      "http://localhost:90/get-favorite?jobAdvertisementId=" +
        jobAdvertisementId +
        "&jobSeekerId=" +
        jobSeekerId
    );
  }

  addFavorite(jobId, seekerId) {
    return axios.post("http://localhost:90/favorite-add", {
      jobAdvertisement: {
        id: jobId,
      },
      jobSeeker: {
        id: seekerId,
      },
    });
  }
}
