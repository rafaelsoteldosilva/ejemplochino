import { StyleSheet } from "react-native";

import { globalTheme } from "./globalConstants";

const baseText = {
    marginTop: 5,
    marginBottom: 5,
    color: globalTheme.textColor,
    fontFamily: "LobsterTwo_400Regular_Italic",
    fontSize: 24,
};

export const globalTextStyle = StyleSheet.create({
    text: {
        ...baseText,
    },
    compactText: {
        ...baseText,
        marginTop: 3,
        marginBottom: 3,
    },
    price: {
        ...baseText,
        fontFamily: "LobsterTwo_700Bold_Italic",
        fontSize: 20,
        marginBottom: 10,
        textAlign: "right",
        color: globalTheme.priceColor,
    },
});

export const globalImageStyle = StyleSheet.create({
    image: {
        width: 360,
        height: 150,
    },
});

export const globalButtonStyle = (show, disable, error, active) =>
    StyleSheet.create({
        button: {
            width: 120,
            backgroundColor: globalTheme.buttonsBackgroundColor,
            marginTop: 0,
            marginRight: 0.8,
            marginBottom: 0.8,
            marginLeft: 0,
            borderWidth: 0.16,
            borderStyle: "solid",
            borderColor: "rgba(255, 255, 255, 0)",
            borderRadius: 2,
            textDecoration: "none",
            fontWeight: 300,
            color: globalTheme.buttonsTextColor,
            textShadowColor: "rgba(0, 0, 0, 0.35)",
            textShadowOffset: { width: 0.04, height: 0.04 },
            textShadowRadius: 0,
            transition: "all 200ms ease",
            textAlign: "center",
            cursor: "pointer",
            transform: active ? "translate(4)" : null,
        },
    });

export const AppStyle = (insets) =>
    StyleSheet.create({
        applicationStyle: {
            flex: 1,
            backgroundColor: "black",
            padding: 5,
            paddingTop: insets.top - 10,
        },
    });
