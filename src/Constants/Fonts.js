import { Dimensions, PixelRatio, Platform } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 360;

export function normalize(size) {
    const newSize = size * scale;
    if (Platform.OS === "ios") {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
export function normalizePAI(nonIos, ios) {
    if (Platform.OS === "ios") {
        const newSize = ios * scale;
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    const newSize = nonIos * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export default {
    fontSize: normalize,
    n: normalize,
    fontSizePAI: normalizePAI,
};
