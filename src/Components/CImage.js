/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/prop-types */
import React from "react";
import { Image, ImageBackground } from "react-native";
import CImageConstants from "../Constants/CImageConstants.js";
import Fonts from "../Constants/Fonts.js";

// const beeHRLogo = ({ children, ...otherProps }) => <Image source={CImageConstants.beeHRLogo} style={[{ height: Fonts.n(120), width: Fonts.n(120) }, otherProps.style]} {...otherProps} />;
const beeHRSplashGif = ({ children, ...otherProps }) => <Image source={CImageConstants.beeHRSplashGif} style={[{ height: Fonts.n(120), width: Fonts.n(120) }, otherProps.style]} {...otherProps} />;

export default {
  // beeHRLogo,
  beeHRSplashGif
};
