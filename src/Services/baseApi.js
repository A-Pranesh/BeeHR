// @flow
import axios from "axios";
import url from "url";

import { Platform, Dimensions, PixelRatio } from "react-native";
import API from "../Constants/API";

// const pixelRatio = PixelRatio.get();
// const { width, height } = Dimensions.get("window");
// const SHA256 = require("crypto-js/sha256");

// const GLOBAL = require("../Constants/GLOBAL.js");

function baseAxios() {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };
  const axiosClient = axios.create({
    baseURL: url.format(API.BASE_URL),
    headers: defaultHeaders,
  });
  axiosClient.defaults.timeout = 10000;
  return axiosClient;
}

function executeRequest(method, pathname, data, options = {}) {
  const body = method === "get" || !data ? null : { data };
  const reqObj = { method, url: pathname, params: options.query, ...body };
  // GLOBAL.CURRENT_TIMESTAMP = Math.floor(Date.now() / 1000);
  // const SECRET_KEY = "kjhchudygf78h484b9u405'HOI'874m,nfgkjdfgb-0848548";
  // const USER_TOKEN = GLOBAL.USER_TOKEN;
  // const COMBINED_KEY = GLOBAL.USER_TOKEN ? GLOBAL.USER_TOKEN + GLOBAL.CURRENT_TIMESTAMP + GLOBAL.USERID : SECRET_KEY + GLOBAL.CURRENT_TIMESTAMP + GLOBAL.USERID;
  // GLOBAL.AUTH_HEADER = COMBINED_KEY;

  // let AUTH_HEADER = "";
  // if (method === "get") {
  //   AUTH_HEADER = SHA256(GLOBAL.AUTH_HEADER + pathname).toString();
  // } else {
  //   AUTH_HEADER = SHA256(
  //     GLOBAL.AUTH_HEADER +
  //     pathname +
  //     JSON.stringify(body.data)
  //       .split(" ")
  //       .join(""),
  //   ).toString();
  // }

  // const baseAxiosRequest = baseAxios(AUTH_HEADER);
  const baseAxiosRequest = baseAxios();
  return new Promise((resolve, reject) => {
    return baseAxiosRequest
      .request(reqObj)
      .then(res => {
        if (res.status === 200) {
          if (res.data.error === 0 || res.data.error === undefined) {
            resolve(res.data);
          } else {
            reject(res.data.message);
          }
        } else {
          reject(res.data.message);
        }
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        if (error.response.status == 419) {

        } else if (error.response.status == 401) {

        } else if (error.response.status == 403) {
          reject(error.response.data.message);
        } else {
          reject(error.response.data.message);
        }
      });
  });
}

export default {
  get(pathname, options) {
    return executeRequest("get", pathname, null, options);
  },

  post(pathname, data, options) {
    return executeRequest("post", pathname, data, options);
  },

  postFlight(pathname, data, options) {
    return executeRequestFlight("post", pathname, data, options);
  },

  postMCommerce(pathname, data, options) {
    return executeRequestMCommerce("post", pathname, data, options);
  },

  getCommerce(pathname, options) {
    return executeRequestMCommerce("post", pathname, null, options);
  },

  getFlight(pathname, options) {
    return executeRequestFlight("get", pathname, null, options);
  },

  put(pathname, data, options) {
    return executeRequest("put", pathname, data, options);
  },

  delete(pathname, data, options) {
    return executeRequest("delete", pathname, data, options);
  },

  all(promises) {
    return axios.all(promises);
  },
};
