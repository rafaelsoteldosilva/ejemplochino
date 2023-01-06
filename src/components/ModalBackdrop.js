import { View, Text } from "react-native";
import React from "react";

export default function ModalBackdrop() {
    return (
        <View
            style={{
                // position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                // zIndex: "100",
                top: 0,
                right: 0,
            }}
        ></View>
    );
}
