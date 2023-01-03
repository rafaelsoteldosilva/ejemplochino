import React, { useEffect } from "react";
import { View, Text, FlatList, Button, Image } from "react-native";
import { useSelector } from "react-redux";

import * as globalConstants from "../globalDefinitions/globalConstants";

import store from "../appStore/store";

import { getRestaurantMenu } from "../slices/restaurantMenuSlice";
import { AppStyle } from "../globalDefinitions/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ShowDish(props) {
    const menu = useSelector(getRestaurantMenu);
    const insets = useSafeAreaInsets();
    let catIndex = props.route.params.propsForShowDish.categoryIndex;
    let dishIndex = props.route.params.propsForShowDish.itemIndex;
    let category = menu.categories[catIndex.categoryIndex];
    let dish = category.dishes[dishIndex.itemIndex].dish;
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
                {/* itemIndex={index}
                                itemName={item.dish.name}
                                itemImage={item.dish.image_url}
                                itemDescription={item.dish.description}
                                itemPrice={item.dish.price} */}
                <Text style={{ color: "white" }}>{dish.name}</Text>
                <Text style={{ color: "#b1b7ba" }}>{dish.description}</Text>
                <Text style={{ color: "#b1b7ba" }}>{dish.price}</Text>
                <Image
                    source={{ uri: dish.image_url }}
                    style={{ width: 360, height: 150, marginBottom: 10 }}
                />
            </View>
        );
}
