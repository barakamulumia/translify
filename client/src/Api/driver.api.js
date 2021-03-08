import axios from "axios";
import { BASE_URL } from "./api.config";

const API_URL = BASE_URL + "drivers/";

class DriverAPI {
  getDriverById(driverid) {
    return axios.get(API_URL + "findone", {
      headers: {
        driverid,
      },
    });
  }

  completeRegistration(userId, truckno, dlno, address) {
    return axios.post(API_URL + "complete-registration", {
      userId,
      truckno,
      dlno,
      address,
    });
  }

  checkVerification(userid) {
    return axios.get(API_URL + "check-verification", {
      headers: {
        userid,
      },
    });
  }
}

export default new DriverAPI();
