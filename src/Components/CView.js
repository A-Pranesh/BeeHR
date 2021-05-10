/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
import React from "react";
import { View } from "react-native";
import Fonts from "../Constants/Fonts";

const CView = ({ P30, P30H, FR, JC, JE, JS, AC, AE, children, style, ...otherProps }) => {
  let justifyContent = "flex-start";
  let alignItems = "flex-start";
  let padding = 0;
  let paddingHorizontal = 0;
  let flexDirection = "column";
  if (JC) {
    justifyContent = "center";
  }
  if (JE) {
    justifyContent = "flex-end";
  }
  if (JS) {
    justifyContent = "space-between";
  }
  if (AC) {
    alignItems = "center";
  }
  if (AE) {
    alignItems = "flex-end";
  }
  if (P30) {
    padding = Fonts.n(30);
    paddingHorizontal = Fonts.n(30);
  }
  if (P30H) {
    padding = 0;
    paddingHorizontal = Fonts.n(30);
  }
  if (FR) {
    flexDirection = "row";
  }

  return <View style={[{ padding, paddingHorizontal, justifyContent, alignItems, flexDirection }]}  {...style}>{children}</View>;
};


export default CView;
