import axios from "axios";

export default class BabyNamesApi {
  static API_URL = "https://jarekbird-prota-test-api.herokuapp.com/api/v1";

  static getBabyNames(list_id) {
    return this.getData("/baby_names?list_id=" + list_id);
  }

  static createBabyName(params) {
    return this.postData("/baby_names", params);
  }

  static updateBabyName(id, params) {
    return this.patchData("/baby_names/" + id, params);
  }

  // Get Request
  static getData(append) {
    return new Promise((resolve, reject) => {
      axios
        .get(this.API_URL + append)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          error.response.data == undefined
            ? reject(error)
            : resolve(error.response.data);
        });
    });
  }

  // Post Request
  static postData(append, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .post(this.API_URL + append, params)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          error.response.data == undefined
            ? reject(error)
            : resolve(error.response.data);
        });
    });
  }

  // Patch Request
  static patchData(append, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .patch(this.API_URL + append, params)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          error.response.data == undefined
            ? reject(error)
            : resolve(error.response.data);
        });
    });
  }
}
