//
//  App.js
//  HOI
//
//  Created by [Author].
//  Copyright © 2018 DIVUM. All rights reserved.
//

import React from "react";

import { Text, TextInput, View, Animated, Platform, Dimensions, AsyncStorage, Modal, Alert, Linking, TouchableOpacity, Image, NativeModules, NativeEventEmitter } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import getSlideFromRightTransition from "./config";
import Splash from './src/Screen/Splash';
import { Root } from "native-base";
import { connect, Provider } from "react-redux";
import { store } from "./src/Saga/store"

console.disableYellowBox = true;

const { width } = Dimensions.get("window");


if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}
if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}
TextInput.defaultProps = { ...(TextInput.defaultProps || {}), allowFontScaling: false };

if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}
if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}
TextInput.defaultProps = { ...(TextInput.defaultProps || {}), allowFontScaling: false };

const PushRouteOne = createStackNavigator(
  {
    Splash
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
    path: "home",
    initialRouteName: "Splash",
    transitionConfig: getSlideFromRightTransition,
  },
  {
    defaultNavigationOptions: {
      header: null,
      headerLeft: null,
      headerRight: null,
    },
  },
);

const AppContainer = createAppContainer(PushRouteOne);

const POSITION = {
  ABSOLUTE: "absolute",
  BOTTOM: "bottom",
  TOP: "top",
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {
    const { text, modalVisible, alertBG } = this.state;
    return (
      <Provider store={store}>
        <Root>
          <AppContainer />
        </Root>
      </Provider>
    );
  }
}
