import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Pressable,
} from "react-native";
import { AppStyle } from "../globalDefinitions/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ShowAnItem = ({
    itemName,
    itemDescription,
    itemImage,
    categoryIndex,
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={AppStyle(insets).applicationStyle}>
            <Pressable
                // onPress={() => {
                //     setTimesPressed((current) => current + 1);
                // }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? "gray" : "black",
                    },
                    // styles.wrapperCustom,
                ]}
            >
                <Text style={{ color: "#b1b7ba" }}>{itemName}</Text>
                <Text style={{ color: "#b1b7ba" }}>{itemDescription}</Text>
                <Image
                    source={{ uri: itemImage }}
                    style={{ width: 360, height: 150, marginBottom: 10 }}
                />
            </Pressable>
        </View>
    );
};
