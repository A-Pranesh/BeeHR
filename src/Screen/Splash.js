
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

const TabViewCustom = ({ isHistoryTab, toggleTab }) => (
    <CView>
        {isHistoryTab ? (
            <CView FR JC style={{ justifyContent: "space-between" }}>
                <View style={{ marginRight: 20 }}>
                    <TouchableOpacity style={{ borderBottomWidth: 3, borderColor: "#f5a623", paddingBottom: 10 }} onPress={() => toggleTab("History")}>
                        <CText.subHeaderLite>Domestic</CText.subHeaderLite>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => toggleTab("UpComing")}>
                        <CText.TabUnselectText>International</CText.TabUnselectText>
                    </TouchableOpacity>
                </View>
            </CView>
        ) : (
                <CView FR JC style={{ justifyContent: "space-between" }}>
                    <View style={{ marginRight: 20 }}>
                        <TouchableOpacity onPress={() => toggleTab("History")}>
                            <CText.TabUnselectText>Domestic</CText.TabUnselectText>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={{ borderBottomWidth: 3, borderColor: "#f5a623", paddingBottom: 10 }} onPress={() => toggleTab("UpComing")}>
                            <CText.subHeaderLite>International</CText.subHeaderLite>
                        </TouchableOpacity>
                    </View>
                </CView>
            )}
    </CView>
);

const SplashGif = () => {
    const styles = useDynamicValue(dynamicStyles)
    return(
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
        const {navigation} = this.props;
  
        AsyncStorage.multiGet(keys, (err, stores) => {
          const LOGINTOKEN_KEY = stores[0];
          GLOBAL.LOGINTOKEN = LOGINTOKEN_KEY[1];
    
          if (GLOBAL.LOGINTOKEN == '' || GLOBAL.LOGINTOKEN == null) {
            GLOBAL.LOGINTOKEN = "";
            // this.props.navigation.replace(RouterConstants.Login)
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

const dynamicStyles = new DynamicStyleSheet({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: new DynamicValue('white', 'black')
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
