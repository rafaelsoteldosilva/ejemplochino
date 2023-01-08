import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import {
    AppStyle,
    globalImageStyle,
    globalTextStyle,
} from "../globalDefinitions/globalStyles";

const TextInputComponent = ({
    label,
    disabled,
    multiline,
    numberOfLines,
    keyboardType,
    secureTextEntry,
    hasError,
    errorText,
}) => {
    numberOfLines = multiline ? numberOfLines : 1;
    return (
        <View style={{ width: "100%" }}>
            <TextInput
                label={label}
                disabled={disabled}
                mode="outlined"
                multiline={multiline}
                numberOfLines={numberOfLines}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                error={hasError}
            />
            <Text style={{ color: "red", fontSize: 12 }}> {errorText}</Text>
        </View>
    );
};

export default TextInputComponent;

const styles = StyleSheet.create({});
