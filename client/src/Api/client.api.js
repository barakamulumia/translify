import axios from "axios";
import { BASE_URL } from "./api.config";

const API_URL = BASE_URL + "clients/";

class ClientAPI {
  getClientById(clientid) {
    return axios.get(API_URL + "findone", {
      headers: {
        clientid,
      },
    });
  }
}

export default new ClientAPI();
