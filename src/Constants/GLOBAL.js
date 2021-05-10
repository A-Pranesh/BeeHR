import { Platform, Dimensions, AsyncStorage } from "react-native";
import SetEncryptText from "../Helper/SetEncryptText";
import String from "./String";
import GetDecryptText from "../Helper/GetDecryptText";
import _ from "lodash";



const t = "com.pax.hoitravel";

const eonpi = ["U2FsdGVkX1+ia5JKozsP3cb1qVR+7hLYxz0rhhS3BjM1F1MtZvpPVnyfuATwlRR2g2iBuOkTJKi1oXWV64BMlA==", "U2FsdGVkX1+hCs1GXd+SuB89Z6sYOqb++95zZvhvKA/gIJMYh/jxUW4v9n7pCc86cbaORGQenYRg6gct9YDlRh2voXOsEoFyZjnFTTr1zlsKfo5GhNEGZdZ7w0i1G43o", "U2FsdGVkX19MR5bgZSiKNab8uQwtyzbHR8YMhhFq7HI9p3TJV/SvJhducCD8U77t", "U2FsdGVkX19P2fnZZGlDdUMnGfiD0m/N8hesSEgnyHj5y0TjhDFgU3k5g0pwMx8W", "U2FsdGVkX18s6k+j05Y8SMCD02b9nbiBMtuQ2HaL7xSN/5Kt8TCDei+V5Fe/YqUZF/R45ItORlNDSasi8vOVLw==", "U2FsdGVkX19BBy2lZUDNVGrcXUUXw+tQblLuGH34RiDwFcd1Bq2TZkKO/l1rZJtzdhEAM61Xf0D/8Itd+hhr2Q==", "U2FsdGVkX19c2QdX0xAp5cYnc+J/FM/exjzBoIXjKtY=", "U2FsdGVkX19rZ21nUfP17Chhrw7WlOu4ApjdnCTDIideOCmfHt5GejvtPJBG6ZPY", "U2FsdGVkX1/VKvVOzyhgKLdzCiQHE3UoxTVydLXmgnli30VpZS/k8q8ta/SKVez7DvUXMFgXId3uA5AgzNjhXg=="];

const de = ["U2FsdGVkX1+pxGaETbFxtqGcGR8ofcBVECLNEi+VIwIjExen15Qlt/lYUXymbpcVcmEk0b2VLQbX+USMcEMRIw==", "U2FsdGVkX1+4qDPVxwZZMS82C8P9vRTSQVVwp4BdqmFXR2UKDJt3RUJoRaWkpycPSI4nSwYXrV9HLoCh813LRw=="];

const { height, width } = Dimensions.get("screen");
export var USERNAME = "HOI";
export var USEREMAIL = "";
export var USERID = "0";
export var USER_MOBILE_NUMBER = "";
export var USER_FIRSTNAME = "Hoi";
export var USER_LASTNAME = "";
export var USER_LOGIN = "false";
export var USER_EMAIL_LINKED = "false";
export var USER_DETAILS = "";
export var USER_DETAILS_FULL = {};
export var PREORDER_COLLECTION_DATA = {};
export var USER_TOKEN = "";
export var USER_REFRESH_TOKEN = "";
export var USER_IS_TRIPED_ADDED_BEFORE = "";
export var USER_TRAVEL_MESSAGE = "";
export var USER_TRAVEL_KM = "";

const CryptoJS = require("crypto-js");

const IV_LENGTH = 16;
const SECRET = "9168b72af6f111e9b15042010aa00007"; // 32 chars

const SetText = value => {
  let ciphertext = CryptoJS.AES.encrypt(value, t);
  ciphertext = ciphertext.toString();

  const bytes = CryptoJS.AES.decrypt(ciphertext.toString(), t);
  const plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return ciphertext;
};

const getText = value => {
  const bytes = CryptoJS.AES.decrypt(value, t);
  const cipherText = bytes.toString(CryptoJS.enc.Utf8);
  return cipherText;
};

export var CLAT = 0;
export var CLONG = 0;
export var CAIRCITYCODE = "";
export var CAIRCITYNAME = "";
export var TIMED_OUT = 1;

export var IS_INTERNET_AVAILABLE = true;

export var CURRENT_AIRPORT_WIFI_BASE_URL = "";
export var CURRENT_AIRPORT_WIFI_URL_ENDPOINT = "";
export var CURRENT_AIRPORT_WIFI_AUTH_TOKEN = "";
export var CURRENT_AIRPORT_WIFI_BASE_URL_DEV = "";
export var CURRENT_AIRPORT_WIFI_URL_ENDPOINT_DEV = "";
export var CURRENT_AIRPORT_WIFI_AUTH_TOKEN_DEV = "";
export var CURRENT_DEVICE_MAC_ADDRESS = "";
export var CURRENT_DEVICE_IP_ADDRESS = "";
export var CURRENT_AIRPORT_WIFI_SESSION_TIME_IN_MINUTES = 45;
export var CURRENT_AIRPORT_WIFI_SSID = "";
export var CURRENT_AIRPORT_ANDROID_WIFI_WORKING = false;
export var CURRENT_AIRPORT_IOS_WIFI_WORKING = false;
export var CURRENT_AIRPORT_WIFI_WORKING = false;
export var CURRENT_AIRPORT_INSIDE_AIRPORT = false;
export var IS_WIFI_SUPPORT = 0;
export var IS_PREORDER_SUPPORT = 0;
export var LOGINTOKEN = "";

export var FORCELOGOUT = false;
export var OPEN_ADDFLIGHT = false;
export var ACCOUNT_TYPE = "";

// for  auth

export var CURRENT_TIMESTAMP = "";
export var AUTH_HEADER = "";
export var ISREFRESHTOKENAPICALLING = false;

// for current trip
export var CTINDEX = 0;
export var CTAIRCITYCODE = "";
export var CTTERMINAL = "";
export var CTTYPE = "";
export var CTTERMINALSIDE = "";
export var CTTRIPID = "";

export var FCM_TOKEN = "";
export var FCM_TOKEN_KEY = "FCM_TOKEN_KEY";

export var ETA_AVAILABLE = "";
export var ETA_API = "";
export var ETA_PAYLOAD = "";
export var ETA_SERVICE = "";

export const USERNAME_KEY = "USERNAME";
export const USEREMAIL_KEY = "USEREMAIL";
export const USERID_KEY = "USERID";
export const USER_MOBILE_NUMBER_KEY = "USER_MOBILE_NUMBER";
export const USER_FIRSTNAME_KEY = "USER_FIRSTNAME";
export const USER_LASTNAME_KEY = "USER_LASTNAME";
export const USER_LOGIN_KEY = "USER_LOGIN_KEY";
export const USER_DETAILS_KEY = "USER_DETAILS_KEY";
export const CAIRCITYCODE_KEY = "CAIRCITYCODE_KEY";
export const LOGINTOKEN_KEY = "LOGINTOKEN";

export const SALT_KEY_IOS = "e8113386843c9d0aaa95ced6e72297ef";
export const SALT_KEY_ANDROID = "ba148bfd22b0e4a990a3afb7778b736f";

export var SCREEN_HEIGHT = height;
export var SCREEN_WIDTH = width;
export var IS189 = height / width > 1.8;

// Payloads
export var WEATHER_PAYLOAD = "";
export var CHECKLIST_PAYLOAD = "";
export var CART_COUNT = 0;

export var USER_FLIGHT_DETAIL = {
  flight: {},
  delivery: [],
};

export var gtoken_uri = "";
export var gclient_id = "";
export var gclient_secret = "";

export var fclient_id = "";
export var fclient_secret = "";

export var ltoken_uri = "";
export var lclient_id = "";
export var lclient_secret = "";
export var gclient_id_ios = "";

// export function SETUSERDETAILS(content, callback) {
//   const { is_new_user, email, first_name, last_name, is_email_link, token, refresh_token, mobile, is_trip_added, travel_info } = content;
//   USEREMAIL = email;
//   USER_LOGIN = "true";
//   USERNAME = `${first_name} ${last_name}`;
//   USER_DETAILS = JSON.stringify(content);
//   USER_DETAILS_FULL = content;
//   USERID = content.id;
//   USER_FIRSTNAME = first_name;
//   USER_LASTNAME = last_name;
//   USER_TOKEN = token;
//   USER_REFRESH_TOKEN = refresh_token;
//   USER_MOBILE_NUMBER = mobile;
//   USER_EMAIL_LINKED = is_email_link;
//   USER_IS_TRIPED_ADDED_BEFORE = is_trip_added;
//   USER_TRAVEL_MESSAGE = travel_info.messge;
//   USER_TRAVEL_KM = travel_info.total_distance;

//   SetEncryptText(USER_FIRSTNAME_KEY, USER_FIRSTNAME);
//   SetEncryptText(USER_LASTNAME_KEY, USER_LASTNAME);
//   SetEncryptText(USERNAME_KEY, USERNAME);
//   SetEncryptText(USEREMAIL_KEY, USEREMAIL);
//   SetEncryptText(USER_LOGIN_KEY, "true");
//   SetEncryptText(USER_DETAILS_KEY, USER_DETAILS);
//   SetEncryptText(USERID_KEY, USERID);
//   if (!_.isEmpty(USER_MOBILE_NUMBER))
//     SetEncryptText(USER_MOBILE_NUMBER_KEY, USER_MOBILE_NUMBER.toString());
//   EventEmitter.emit(String.ON_USER_ID_FETCHED);
//   if (callback) {
//     callback();
//   }
// }