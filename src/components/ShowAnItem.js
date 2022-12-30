import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Pressable,
} from "react-native";
import { globalStyle } from "../globalDefinitions/globalStyles";

export const ShowAnItem = ({
    itemName,
    itemDescription,
    itemImage,
    categoryIndex,
}) => {
    return (
        <View>
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
                <Text style={{ color: "#b1b7ba", marginTop: 20 }}>
                    {itemName}
                </Text>
                <Text style={{ color: "#b1b7ba" }}>{itemDescription}</Text>
                <Image
                    source={{ uri: itemImage }}
                    style={{ width: 360, height: 150, marginBottom: 10 }}
                />
            </Pressable>
        </View>
    );
};
