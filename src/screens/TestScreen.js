import React from "react";
import { View, Text } from "react-native";

import { AppStyle } from "../globalDefinitions/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TestScreen() {
    const insets = useSafeAreaInsets();

    return (
        <View style={AppStyle(insets).applicationStyle}>
            <Text style={{ marginTop: 50, color: "white" }}>Test Screen</Text>
        </View>
    );
}
