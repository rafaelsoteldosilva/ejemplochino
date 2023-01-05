import React, { useContext, useEffect, useState } from "react";

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
import { ArgumentContext } from "../globalContexts/argumentContext";

export const ShowCategoryInList = ({
    itemName,
    itemDescription,
    itemImage,
    itemIndex,
    navigation,
}) => {
    const insets = useSafeAreaInsets();
    const { argument, setArgument } = useContext(ArgumentContext);

    return (
        <View style={AppStyle(insets).applicationStyle}>
            <Pressable
                onPress={() => {
                    setArgument(itemIndex);

                    navigation.navigate("ShowDishes");
                }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? "gray" : "black",
                    },
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
