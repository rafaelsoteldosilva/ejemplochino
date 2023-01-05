import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, Button, Image } from "react-native";
import { useSelector } from "react-redux";

import * as globalConstants from "../globalDefinitions/globalConstants";

import store from "../appStore/store";

import { getRestaurantMenu } from "../slices/restaurantMenuSlice";
import {
    AppStyle,
    globalImageStyle,
    globalTextStyle,
} from "../globalDefinitions/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArgumentContext } from "../globalContexts/argumentContext";

export default function ShowDish(props) {
    const menu = useSelector(getRestaurantMenu);
    const { argument, setArgument } = useContext(ArgumentContext);

    const insets = useSafeAreaInsets();
    let catIndex = props.route.params.propsForShowDish.categoryIndex;
    let dishIndex = props.route.params.propsForShowDish.itemIndex;
    let category = menu.categories[catIndex.categoryIndex];
    let dish = category.dishes[dishIndex.itemIndex].dish;

    if (
        store.getState().restaurantMenu.restaurantMenuStatus !==
        globalConstants.menuReadingSucceeded
    )
        return (
            <Text style={{ color: "white", paddingTop: insets.top }}>
                ShowDish Loading...
            </Text>
        );
    else
        return (
            <View style={AppStyle(insets).applicationStyle}>
                <Image
                    source={{ uri: dish.image_url }}
                    style={globalImageStyle.image}
                />
                <Text style={globalTextStyle.text}>{dish.name}</Text>
                <Text style={globalTextStyle.text}>{dish.description}</Text>
                <Text style={globalTextStyle.price}>{dish.price}</Text>
            </View>
        );
}
