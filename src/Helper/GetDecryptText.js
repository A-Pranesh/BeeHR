import { Platform } from "react-native";

const CryptoJS = require("crypto-js");
const GLOBAL = require("../Constants/GLOBAL");

export default function GetDecryptText(value) {
    if (value) {
        const SaltKey = Platform.OS === "ios" ? GLOBAL.SALT_KEY_IOS : GLOBAL.SALT_KEY_ANDROID;
        let decryptText = CryptoJS.AES.decrypt(value, SaltKey);
        decryptText = decryptText.toString(CryptoJS.enc.Utf8);
        return decryptText;
    }
    return value;
}
