/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/prop-types */
import React from "react";
import { Dimensions } from "react-native";
import { Image, ImageBackground } from "react-native";
import CImageConstants from "../Constants/CImageConstants.js";
import Fonts from "../Constants/Fonts.js";

// const beeHRLogo = ({ children, ...otherProps }) => <Image source={CImageConstants.beeHRLogo} style={[{ height: Fonts.n(120), width: Fonts.n(120) }, otherProps.style]} {...otherProps} />;
const beeHRSplashGif = ({ children, ...otherProps }) => <Image source={CImageConstants.beeHRSplashGif} style={[{ height: Dimensions.get('window').height-Fonts.n(200), width: Dimensions.get('window').width }, otherProps.style]} resizeMode={"cover"} {...otherProps} />;
const login = ({ children, ...otherProps }) => <Image source={CImageConstants.login} style={[{ height: Fonts.n(125), width: Fonts.n(125) }, otherProps.style]} resizeMode={'cover'} {...otherProps} />;

export default {
  // beeHRLogo,
  beeHRSplashGif,
  login
};
