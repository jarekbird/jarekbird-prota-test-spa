import axios from "axios";

export default class BabyNamesApi {
  static API_URL = "http://localhost:3000/api/v1";

  static getBabyNames(list_id) {
    return this.getData("/baby_names?list_id=" + list_id);
  }

  static createBabyName(params) {
    console.log(params);
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
        .catch((response) => {
          reject(response);
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
        .catch((response) => {
          reject(response);
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
        .catch((response) => {
          reject(response);
        });
    });
  }

  static deleteData(append) {
    return new Promise((resolve, reject) => {
      axios
        .delete(this.API_URL + append)
        .then((response) => {
          resolve(response.data);
        })
        .catch((response) => {
          reject(response);
        });
    });
  }
}
