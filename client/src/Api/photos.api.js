import { BASE_URL } from "./api.config";
import axios from "axios";

const API_URL = BASE_URL + "photos";

class PhotoAPI {
  upload(formData) {
    return axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  getProfileID(userid) {
    axios.get(API_URL + "/img-id", {
      headers: {
        userid,
      },
    });
  }
}

export default new PhotoAPI();
