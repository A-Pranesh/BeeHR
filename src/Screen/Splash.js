
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Container } from "native-base";
import CText from "../Components/CText";
import CView from "../Components/CView";
// import CImage from "../Components/CImage";
import Fonts from "../Constants/Fonts";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUsers } from "../Saga/USERAPI/Actions";
import LoadingView from "../Components/LoadingView";
import * as ActionTypes from "../Saga/ActionTypes";
import Strings from "../Constants/String";
import Colors from "../Constants/Colors";
import MarginTop from "../Components/MarginTop";
import RouterConstants from "../Constants/RouterConstants";
import CImage from "../Components/CImage";
import _ from "lodash";
import { DynamicStyleSheet, DynamicValue, useDynamicValue } from 'react-native-dynamic'
const GLOBAL = require("../Constants/GLOBAL.js");

const SplashGif = () => {
    return (
        <CView AC JC style={styles.container}>
            <CImage.beeHRSplashGif></CImage.beeHRSplashGif>
        </CView>
    )
}

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: "",
        };
        this.bootstrapAsync = _.debounce(this.bootstrapAsync, 3000);
    }

    componentDidMount() {
        this.bootstrapAsync()
        // this.props.getUsers();
    }

    handleSuccess = (response) => {
        this.setState({ response });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { user } = nextProps;
        const { action } = user;

        if (action === ActionTypes.GET_USERS_SUCCESS) {
            this.handleSuccess(user.userDetails);
        } else if (action === ActionTypes.GET_USERS_ERROR) {
            this.handleError(user.Error);
        }
    }

    bootstrapAsync = async () => {
        const keys = [GLOBAL.LOGINTOKEN_KEY];
        const { navigation } = this.props;

        AsyncStorage.multiGet(keys, (err, stores) => {
            const LOGINTOKEN_KEY = stores[0];
            GLOBAL.LOGINTOKEN = LOGINTOKEN_KEY[1];

            if (_.isEmpty(GLOBAL.LOGINTOKEN)) {
                GLOBAL.LOGINTOKEN = "";
                this.props.navigation.replace(RouterConstants.Login)
            } else {

            }
        })
    }

    render() {
        return (
            <Container>
                <SplashGif />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "black"
    }
});


const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    getUsers: () => {
        dispatch(getUsers());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
