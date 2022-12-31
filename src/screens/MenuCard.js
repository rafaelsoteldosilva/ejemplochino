import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import * as globalConstants from "../globalDefinitions/globalConstants";

import store from "../appStore/store";

import { AppStyle } from "../globalDefinitions/globalStyles";
import { ShowAnItem } from "../components/ShowAnItem";
import { getRestaurantMenu } from "../slices/restaurantMenuSlice";

export default function MenuCard() {
    const menu = useSelector(getRestaurantMenu);
    // const status = useSelector(getRestaurantMenuStatus);
    if (
        store.getState().restaurantMenu.restaurantMenuStatus !==
        globalConstants.menuReadingSucceeded
    )
        return <Text style={{ color: "white" }}>Loading...</Text>;
    else
        return (
            <View style={AppStyle.appStyle}>
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
