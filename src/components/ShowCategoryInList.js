import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Pressable,
} from "react-native";
import {
    AppStyle,
    globalImageStyle,
    globalTextStyle,
} from "../globalDefinitions/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ShowCategoryInList = ({
    itemName,
    itemDescription,
    itemImage,
    itemIndex,
    navigation,
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={AppStyle(insets).applicationStyle}>
            <Pressable
                onPress={() => {
                    navigation.navigate("ShowDishes", {
                        categoryIndex: { itemIndex },
                    });
                }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? "gray" : "black",
                    },
                    // styles.wrapperCustom,
                ]}
            >
                <Text style={globalTextStyle.text}>{itemName}</Text>
                <Text style={globalTextStyle.compactText}>
                    {itemDescription}
                </Text>
                <Image
                    source={{ uri: itemImage }}
                    style={globalImageStyle.image}
                />
            </Pressable>
        </View>
    );
};
