import React, { Component, useEffect, useState } from "react";
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions, Text } from "react-native";
import { connect } from "react-redux";
import { Container, Content } from "native-base";
import CText from "../Components/CText";
import CView from "../Components/CView";
import Fonts from "../Constants/Fonts";
import * as ActionTypes from "../Saga/ActionTypes";
import Colors from "../Constants/Colors";
import MarginTop from "../Components/MarginTop";
import RouterConstants from "../Constants/RouterConstants";
import CImage from "../Components/CImage";
import { DynamicStyleSheet, DynamicValue, useDarkModeContext, useDynamicStyleSheet } from 'react-native-dynamic'
import FloatingTitleTextInputField from 'react-native-custom-floating-input-label'
import SwipeButton from 'rn-swipe-button';

export const dynamicStyles = new DynamicStyleSheet({
    container: {
        backgroundColor: new DynamicValue(Colors.white, Colors.black),
        paddingTop: (Platform.OS === 'ios') ? Fonts.n(20) : Fonts.n(0),

    },
})
const LoginScreen = ({ headerProps }) => {
    const [companyCode, setCompanyCode] = useState('')
    const stylesSheet = useDynamicStyleSheet(dynamicStyles)
    const mode = useDarkModeContext()
    return (
        <Container style={stylesSheet.container}>
            <Content>
                <CView AC JC style={{ width: '100%', height: Dimensions.get('window').height }}>
                    <CImage.login />
                    <View style={{ width: '100%', paddingHorizontal: Fonts.n(16), marginTop: Fonts.n(24) }}>
                        <FloatingTitleTextInputField
                            attrName='Company code'
                            value={companyCode}
                            titleActiveColor={Colors.theme_color}
                            title={
                                companyCode
                                    ? 'Your Company code'
                                    : companyCode != ''
                                        ? 'Your Company code'
                                        : 'Enter your Company code'
                            }
                            keyboardType={'number-pad'}
                            maxLength={10}

                            // updateMasterState={this._updateMasterState}
                            // focus={this._onFocus}
                            // blur={this._onBlur}
                            textInputStyles={{
                                // here you can add additional TextInput styles
                                color: Colors.theme_color,
                                fontSize: 15,
                                width: '100%'
                            }}
                            otherTextInputProps={{
                                // here you can add other TextInput props of your choice
                                maxLength: 10
                            }}
                        />
                    </View>
                    <View style={{ width: '100%', paddingHorizontal: Fonts.n(16), marginTop: Fonts.n(16) }}>
                        <FloatingTitleTextInputField
                            attrName='Employee code'
                            titleActiveColor={Colors.theme_color}
                            value={companyCode}
                            title={
                                companyCode
                                    ? 'Your Employee code'
                                    : companyCode != ''
                                        ? 'Your Employee code'
                                        : 'Enter your Employee code'
                            }
                            keyboardType={'number-pad'}
                            maxLength={10}
                            // updateMasterState={this._updateMasterState}
                            // focus={this._onFocus}
                            // blur={this._onBlur}
                            textInputStyles={{
                                // here you can add additional TextInput styles
                                color: Colors.theme_color,
                                fontSize: 15,
                                width: '100%'
                            }}
                            otherTextInputProps={{
                                // here you can add other TextInput props of your choice
                                maxLength: 10
                            }}
                        />
                    </View>
                    <View style={{ width: '100%', paddingHorizontal: Fonts.n(16), marginTop: Fonts.n(16) }}>
                        <FloatingTitleTextInputField
                            attrName='PassCode'
                            value={companyCode}
                            titleActiveColor={Colors.theme_color}
                            title={
                                companyCode
                                    ? 'Your PassCode'
                                    : companyCode != ''
                                        ? 'Your PassCode'
                                        : 'Enter PassCode'
                            }
                            keyboardType={'number-pad'}
                            maxLength={10}
                            // updateMasterState={this._updateMasterState}
                            // focus={this._onFocus}
                            // blur={this._onBlur}
                            textInputStyles={{
                                // here you can add additional TextInput styles
                                color: Colors.theme_color,
                                fontSize: 15,
                                width: '100%'
                            }}
                            otherTextInputProps={{
                                // here you can add other TextInput props of your choice
                                maxLength: 10
                            }}
                        />
                    </View>
                    <View style={{ width: '100%', alignSelf: 'center', marginTop: Fonts.n(20) }}>
                        <SwipeButton
                            disabled={false}
                            //disable the button by doing true (Optional)
                            swipeSuccessThreshold={50}
                            height={45}
                            //height of the button (Optional)
                            width={Dimensions.get('window').width - Fonts.n(12)}
                            //width of the button (Optional)
                            title={"Login  -->"}
                            //Text inside the button (Optional)
                            //thumbIconImageSource={thumbIcon}
                            //You can also set your own icon (Optional)
                            onSwipeSuccess={() => {
                                alert('Submitted Successfully!');
                            }}
                            titleColor={Colors.theme_color}
                            //After the completion of swipe (Optional)
                            railFillBackgroundColor={Colors.black} //(Optional)
                            railFillBorderColor={Colors.black} //(Optional)
                            thumbIconBackgroundColor={Colors.theme_color} //(Optional)
                            thumbIconBorderColor={mode == 'dark' ? Colors.white : Colors.black} //(Optional)
                            railBackgroundColor={mode == 'dark' ? Colors.white : Colors.black} //(Optional)
                            railBorderColor={mode == 'dark' ? Colors.white : Colors.black} //(Optional)
                        />
                    </View>
                </CView>
            </Content>
        </Container>
    )
}

class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <LoginScreen headerProps={this.props} />
        )
    }
}
export default Login;