import {AsyncStorage, Platform} from "react-native";

const CryptoJS = require("crypto-js");
const GLOBAL = require("../Constants/GLOBAL");

export default function SetEncryptText(key, value) {
  const SaltKey = Platform.OS === "ios" ? GLOBAL.SALT_KEY_IOS : GLOBAL.SALT_KEY_ANDROID;
  let cipherText = CryptoJS.AES.encrypt(value, SaltKey);
  cipherText = cipherText.toString();
  AsyncStorage.setItem(key, cipherText.toString());
}
