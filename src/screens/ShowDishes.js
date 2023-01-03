import React, { useEffect } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";

import * as globalConstants from "../globalDefinitions/globalConstants";

import store from "../appStore/store";

import { ShowDishInList } from "../components/ShowDishInList";
import { getRestaurantMenu } from "../slices/restaurantMenuSlice";
import { AppStyle } from "../globalDefinitions/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ShowDishes(props) {
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
                    data={
                        menu.categories[
                            props.route.params.categoryIndex.itemIndex
                        ].dishes
                    }
                    keyExtractor={(item) => item.dish.id}
                    renderItem={({ item, index }) => {
                        return (
                            <ShowDishInList
                                itemIndex={index}
                                itemName={item.dish.name}
                                itemImage={item.dish.image_url}
                                itemDescription={item.dish.description}
                                itemPrice={item.dish.price}
                            />
                        );
                    }}
                />
            </View>
        );
}
