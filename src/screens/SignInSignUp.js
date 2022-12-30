import React from "react";
import { View, Text } from "react-native";

import { AppStyle } from "../globalDefinitions/globalStyles";

export default function SignInSignUp() {
    //
    return (
        <View style={AppStyle.appStyle}>
            <Text style={{ marginTop: 50, color: "white" }}>Sign In or Up</Text>
        </View>
    );
}
