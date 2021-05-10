/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View } from "react-native";
import Colors from "../Constants/Colors";
import Fonts from "../Constants/Fonts";

const MarginTop = ({ Line, Top = 0, ...otherProps }) => <View style={[{ height: Line ? .5 : 0, backgroundColor: Colors.Greyblue, width: "100%", marginTop: Fonts.fontSize(Top), opacity: .3 }, otherProps.style]} />;
export default MarginTop;
