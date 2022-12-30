import { StyleSheet } from "react-native";

import { globalTheme } from "./globalConstants";

export const globalStyle = (show, disable, error, active) =>
    StyleSheet.create({
        text: {
            marginTop: 25,
            color: globalTheme.textColor,
        },
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

export const AppStyle = StyleSheet.create({
    appStyle: {
        flex: 1,
        backgroundColor: "black",
    },
});
