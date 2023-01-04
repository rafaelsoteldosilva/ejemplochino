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

export const ShowDishInList = ({
    itemName,
    itemDescription,
    itemImage,
    itemPrice,
    itemIndex,
    categoryIndex,
    navigation,
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={AppStyle(insets).applicationStyle}>
            <Pressable
                onPress={() => {
                    let propsForShowDish = {
                        categoryIndex: { categoryIndex },
                        itemIndex: { itemIndex },
                    };

                    navigation.navigate("ShowDish", {
                        propsForShowDish: propsForShowDish,
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
                <Text style={globalTextStyle.text}>
                    {itemDescription.slice(0, 25)}...
                </Text>
                <Text style={globalTextStyle.text}>{itemPrice}</Text>
                <Image
                    source={{ uri: itemImage }}
                    style={{ width: 360, height: 150, marginBottom: 10 }}
                />
            </Pressable>
        </View>
    );
};
