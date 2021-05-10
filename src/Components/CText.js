/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/prop-types */
import React from "react";
import { Text } from "react-native";
import Fonts from "../Constants/Fonts";
import Colors from "../Constants/Colors";

const bigHeader = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(150), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const headerNovasb = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(100), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const headerExtraBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNEB, fontSize: Fonts.n(44), color: Colors.white }, otherProps.style]}>{children}</Text>;

const extraBoldHeader = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNEB, fontSize: Fonts.n(44), color: Colors.white }, otherProps.style]}>{children}</Text>;

const HeaderpnrBlack = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBL, fontSize: Fonts.n(30), color: Colors.white }, otherProps.style]}>{children}</Text>;

const HeaderNovabold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(30), color: Colors.white }, otherProps.style]}>{children}</Text>;

const SubHeaderBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(30), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const TextPNB = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(30), color: Colors.white }, otherProps.style]}>{children}</Text>;

const TextSbNova = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(30), color: Colors.mild_grey }, otherProps.style]}>{children}</Text>;

const normalTextBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(30), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const normalTextBoldLite = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(30), color: Colors.Pinkgrey }, otherProps.style]}>{children}</Text>;

const HeaderExtrabld2 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNEB, fontSize: Fonts.n(30), color: Colors.white }, otherProps.style]}>{children}</Text>;

const Headerextrabld1 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNEB, fontSize: Fonts.n(30), color: Colors.white }, otherProps.style]}>{children}</Text>;

const TextPNEB1 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNEB, fontSize: Fonts.n(30), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const TextPNEB2 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNEB, fontSize: Fonts.n(30), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const HeaderNovaBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(24), color: Colors.white }, otherProps.style]}>{children}</Text>;

const header = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(24), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const SBText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(24), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const SHSemiBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(24), color: Colors.squash }, otherProps.style]}>{children}</Text>;

const subHeaderPNSB = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(24), color: Colors.squash }, otherProps.style]}>{children}</Text>;

const SubHeaderEb1 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNEB, fontSize: Fonts.n(24), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const SubHeaderEb2 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNEB, fontSize: Fonts.n(24), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const HeaderPnrBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(22), color: Colors.white }, otherProps.style]}>{children}</Text>;

const PnrBoldHeader = ({ children, ...otherProps }) => <Text  {...otherProps} style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(22), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const DescriptionSb = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(22), color: Colors.squash }, otherProps.style]}>{children}</Text>;

const TextProxiNovaSB = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(22), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const Textsemibold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(22), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const HeaderBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(20), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const HeaderPNB = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(20), color: Colors.white }, otherProps.style]}>{children}</Text>;

const DSP1 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(20), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const DSP2 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(20), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const DSPSemiBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(20), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const HeaderSemibold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(Fonts.fontSize(20)), color: Colors.white }, otherProps.style]}>{children}</Text>;

const TextEb1 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNEB, fontSize: Fonts.n(20), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const TextEb2 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNEB, fontSize: Fonts.n(20), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const headerEb1 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNEB, fontSize: Fonts.n(20), color: Colors.white }, otherProps.style]}>{children}</Text>;

const headerEb2 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNEB, fontSize: Fonts.n(20), color: Colors.white }, otherProps.style]}>{children}</Text>;

const BoldHeader = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(18), color: Colors.white }, otherProps.style]}>{children}</Text>;

const TextProxiNovaBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(18), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const naviHeader = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(18), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const DspSb1 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(18), color: Colors.white }, otherProps.style]}>{children}</Text>;

const DspSb2 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(18), color: Colors.white }, otherProps.style]}>{children}</Text>;

const TextNsb = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(18), color: Colors.white }, otherProps.style]}>{children}</Text>;

const NovaBoldText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(16), color: Colors.white }, otherProps.style]}>{children}</Text>;

const TextNovaBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(16), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const headerBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(16), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const subHeaderBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(16), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const HeaderNovaSB2 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(16), color: Colors.white }, otherProps.style]}>{children}</Text>;

const HeaderNovaSb1 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(16), color: Colors.white }, otherProps.style]}>{children}</Text>;

const HeaderSemiBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(16), color: Colors.white }, otherProps.style]}>{children}</Text>;

const SelectedHeader = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(16), color: Colors.squash }, otherProps.style]}>{children}</Text>;

const TabUnselectText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(16), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const TextInputBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(16), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const TextSelected = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(16), color: Colors.squash }, otherProps.style]}>{children}</Text>;

const subHeader2 = ({ children, ellip, ...otherProps }) => <Text ellipsizeMode="tail" style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(16), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const subHeaderLite = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(16), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const subHeaderSb = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(16), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const HeaderUnSelected = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(16), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const NoveaTextRegular = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(16), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const RegularPnText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(16), color: Colors.white }, otherProps.style]}>{children}</Text>;

const SHRegular = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(16), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const TextPnRegular = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(16), color: Colors.white }, otherProps.style]}>{children}</Text>;

const TextRegularLite = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(16), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const dspNovaReg = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(16), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const headerLite = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(16), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const subTitleReg = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(16), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const TextBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(14), color: Colors.white }, otherProps.style]}>{children}</Text>;

const DspLite = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const DspSemiBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const LiteText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const ProximaText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.white }, otherProps.style]}>{children}</Text>;

const SemiBoldText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const SubHeaderPnsb1 = ({ children, numberOfLines, ...otherProps }) => <Text numberOfLines={numberOfLines} style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const SubHeaderPnsb2 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const TabHeaderSelect = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.squash }, otherProps.style]}>{children}</Text>;

const TextPnrSemiBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const TextSB = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const TextSBLite = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const TextSemiBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const dsp = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const headerSB = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.white }, otherProps.style]}>{children}</Text>;

const normalTextLite = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.white }, otherProps.style]}>{children}</Text>;

const ButtonText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.squash }, otherProps.style]}>{children}</Text>;

const ButtonTextRegular = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.blue }, otherProps.style]}>{children}</Text>;

const Dsp = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const Dsp2 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.squash }, otherProps.style]}>{children}</Text>;

const ProxiRegularText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const RegularNovaText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.white }, otherProps.style]}>{children}</Text>;

const RegularPNR = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const RegularText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.white }, otherProps.style]}>{children}</Text>;

const RegularTextNova = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.white }, otherProps.style]}>{children}</Text>;

const SelectedText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.white }, otherProps.style]}>{children}</Text>;

const TabHeaderUnselect = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const TextLite = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.Greyblue, lineHeight: Fonts.n(20) }, otherProps.style]}>{children}</Text>;

const TextReg14 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.blue }, otherProps.style]}>{children}</Text>;

const TextRegular = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const TextRegular2 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const TextUnSelect = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const UnSelectedText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const description1 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const descriptionPnr = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const dspRegular = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const normalText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.Greyblue, lineHeight: Fonts.n(18) }, otherProps.style]}>{children}</Text>;

const subDsp = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.white }, otherProps.style]}>{children}</Text>;

const subHeaderRegular = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.white }, otherProps.style]}>{children}</Text>;

const subNovaHeader = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const subtitle1 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.Greyblue, lineHeight: Fonts.fontSize(20) }, otherProps.style]}>{children}</Text>;

const subtitle2 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const textlite = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const TextProxiBold = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(12), color: Colors.white }, otherProps.style]}>{children}</Text>;

const DspTxt = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(12), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const NovaRegularText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(12), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const RegularTextPnr = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(12), color: Colors.white }, otherProps.style]}>{children}</Text>;

const TextColored = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(12), color: Colors.squash }, otherProps.style]}>{children}</Text>;

const TextNovaRegular1 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(12), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const TextNovaRegular2 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(12), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const TextPnr = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(12), color: Colors.white }, otherProps.style]}>{children}</Text>;

const TextProxiRegular = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(12), color: Colors.Greyblue }, otherProps.style]}>{children}</Text>;

const TextPNRTen = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(10), color: Colors.Greyblue, lineHeight: Fonts.n(12) }, otherProps.style]}>{children}</Text>;

const regularText1 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(12), color: Colors.white }, otherProps.style]}>{children}</Text>;

const subTitle1 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(12), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const subtitleReg1 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(12), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const subtitleReg2 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(12), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const smallText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(10), color: Colors.white }, otherProps.style]}>{children}</Text>;

const SimpleText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(10), color: Colors.white }, otherProps.style]}>{children}</Text>;

const TextRegNova = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(14), color: Colors.blue }, otherProps.style]}>{children}</Text>;

const litetxt = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(10), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const TextStylePNS = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), color: Colors.marine }, otherProps.style]}>{children}</Text>;
const PNSBMarine = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(22), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const terms = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(10), lineHeight: Fonts.n(16), color: Colors.bluey_grey }, otherProps.style]}>{children}</Text>;

const subheadTitle = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(14), lineHeight: Fonts.n(18), color: Colors.marine }, otherProps.style]}>{children}</Text>;

const EditText = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNR, fontSize: Fonts.n(16), lineHeight: Fonts.n(18), color: Colors.squash }, otherProps.style]}>{children}</Text>;


const PNSBWHITE12 = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNSB, fontSize: Fonts.n(12), color: Colors.white }, otherProps.style]}>{children}</Text>;

const PNBDHeaderBlack = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(24), color: Colors.black }, otherProps.style]}>{children}</Text>;
const PreOrderHeader = ({ children, ...otherProps }) => <Text style={[{ fontFamily: Fonts.PNBD, fontSize: Fonts.n(24), color: Colors.marine }, otherProps.style]}>{children}</Text>;


export default {
  terms,
  bigHeader,
  headerNovasb,
  TextStylePNS,
  litetxt,
  headerExtraBold,
  extraBoldHeader,
  TextRegNova,
  HeaderpnrBlack,
  HeaderNovabold,
  SubHeaderBold,
  TextPNB,
  TextSbNova,
  normalTextBold,
  normalTextBoldLite,
  HeaderExtrabld2,
  Headerextrabld1,
  TextPNEB1,
  TextPNEB2,
  HeaderNovaBold,
  header,
  SBText,
  SHSemiBold,
  subHeaderPNSB,
  SubHeaderEb1,
  SubHeaderEb2,
  HeaderPnrBold,
  PnrBoldHeader,
  DescriptionSb,
  TextProxiNovaSB,
  Textsemibold,
  HeaderBold,
  HeaderPNB,
  DSP1,
  DSP2,
  DSPSemiBold,
  HeaderSemibold,
  TextEb1,
  TextEb2,
  headerEb1,
  headerEb2,
  BoldHeader,
  TextProxiNovaBold,
  naviHeader,
  DspSb1,
  DspSb2,
  TextNsb,
  NovaBoldText,
  TextNovaBold,
  headerBold,
  subHeaderBold,
  HeaderNovaSB2,
  HeaderNovaSb1,
  HeaderSemiBold,
  SelectedHeader,
  TabUnselectText,
  TextInputBold,
  TextSelected,
  subHeader2,
  subHeaderLite,
  subHeaderSb,
  HeaderUnSelected,
  NoveaTextRegular,
  RegularPnText,
  SHRegular,
  TextPnRegular,
  TextRegularLite,
  dspNovaReg,
  headerLite,
  subTitleReg,
  TextBold,
  DspLite,
  DspSemiBold,
  LiteText,
  ProximaText,
  SemiBoldText,
  SubHeaderPnsb1,
  SubHeaderPnsb2,
  TabHeaderSelect,
  TextPnrSemiBold,
  TextSB,
  TextSBLite,
  TextSemiBold,
  dsp,
  headerSB,
  normalTextLite,
  ButtonText,
  ButtonTextRegular,
  Dsp,
  Dsp2,
  ProxiRegularText,
  RegularNovaText,
  RegularPNR,
  RegularText,
  RegularTextNova,
  SelectedText,
  TabHeaderUnselect,
  TextLite,
  TextReg14,
  TextRegular,
  TextRegular2,
  TextUnSelect,
  UnSelectedText,
  description1,
  descriptionPnr,
  dspRegular,
  normalText,
  subDsp,
  subHeaderRegular,
  subNovaHeader,
  subtitle1,
  subtitle2,
  textlite,
  TextProxiBold,
  DspTxt,
  smallText,
  NovaRegularText,
  RegularTextPnr,
  TextColored,
  TextNovaRegular1,
  TextNovaRegular2,
  TextPnr,
  TextProxiRegular,
  regularText1,
  subTitle1,
  subtitleReg1,
  subtitleReg2,
  SimpleText,
  PNSBMarine,
  subheadTitle,
  TextPNRTen,
  EditText,
  PNSBWHITE12,
  PNBDHeaderBlack,
  PreOrderHeader
};
