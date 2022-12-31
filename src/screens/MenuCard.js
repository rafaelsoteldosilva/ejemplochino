import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";

import * as globalConstants from "../globalDefinitions/globalConstants";

import store from "../appStore/store";

import { ShowAnItem } from "../components/ShowAnItem";
import { getRestaurantMenu } from "../slices/restaurantMenuSlice";
import { AppStyle } from "../globalDefinitions/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function MenuCard() {
    const menu = useSelector(getRestaurantMenu);
    const insets = useSafeAreaInsets();
    // const status = useSelector(getRestaurantMenuStatus);
    if (
        store.getState().restaurantMenu.restaurantMenuStatus !==
        globalConstants.menuReadingSucceeded
    )
        return (
            <Text style={{ color: "white", paddingTop: insets.top }}>
                Loading...
            </Text>
        );
    else
        return (
            <View style={AppStyle(insets).applicationStyle}>
                <FlatList
                    data={menu.categories}
                    keyExtractor={(item) => item.category.id}
                    renderItem={({ item, index }) => {
                        return (
                            <ShowAnItem
                                itemIndex={index}
                                itemName={item.category.name}
                                itemImage={item.category.image_url}
                                itemDescription={item.category.description}
                            />
                        );
                    }}
                />
            </View>
        );
}
