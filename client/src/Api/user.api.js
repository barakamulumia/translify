import axios from "axios";
import authHeader from "./auth-header";
import { BASE_URL } from "./api.config";

const API_URL = BASE_URL + "test/";

class UserAPI {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getClientBoard() {
    return axios.get(API_URL + "client", { headers: authHeader() });
  }

  getDriverBoard() {
    return axios.get(API_URL + "driver", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserAPI();
