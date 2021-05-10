import {View, StyleSheet, Dimensions} from "react-native";
import React from "react";

import ImageConstants from "../Constants/ImageConstants";
import Fonts from "../Constants/Fonts";
import CImage from "./CImage";
import CView from "./CView";

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
  loading: {flex: 1, height, justifyContent: "center", marginTop: Fonts.n(94), position: "absolute", width},
});

const LoadingView = ({ style }) => (
  <View style={styles.loading}>
    <CView AC JC style={{ flex: 1 }}>
      {/* <CImage.loadingGif style={[{ marginTop: Fonts.n(-94) }, style]} /> */}
    </CView>
  </View>
);

export default LoadingView;
