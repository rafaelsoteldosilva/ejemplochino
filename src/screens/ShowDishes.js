import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { useSelector } from "react-redux";

import * as globalConstants from "../globalDefinitions/globalConstants";

import store from "../appStore/store";

import { ShowDishInList } from "../components/ShowDishInList";
import { getRestaurantMenu } from "../slices/restaurantMenuSlice";
import { AppStyle } from "../globalDefinitions/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArgumentContext } from "../globalContexts/argumentContext";
import ScreenHeader from "../components/ScreenHeader";

export default function ShowDishes(props) {
    const menu = useSelector(getRestaurantMenu);
    const insets = useSafeAreaInsets();
    const { argument, setArgument } = useContext(ArgumentContext);
    const navigation = props.navigation;

    if (
        store.getState().restaurantMenu.restaurantMenuStatus !==
        globalConstants.menuReadingSucceeded
    )
        return (
            <Text style={{ color: "black", paddingTop: insets.top }}>
                ShowDishes Loading...
            </Text>
        );
    else
        return (
            <View style={AppStyle(insets).applicationStyle}>
                <ScreenHeader
                    navigation={navigation}
                    currentScreen={menu.categories[
                        argument
                    ].category.description.slice(0, 40)}
                    previousScreen={"Menu Card"}
                />
                <FlatList
                    data={menu.categories[argument].dishes}
                    keyExtractor={(item) => item.dish.id}
                    renderItem={({ item, index }) => {
                        return (
                            <ShowDishInList
                                categoryIndex={argument}
                                itemIndex={index}
                                itemName={item.dish.name}
                                itemImage={item.dish.image_url}
                                itemDescription={item.dish.description}
                                itemPrice={item.dish.price}
                                navigation={props.navigation}
                            />
                        );
                    }}
                />
            </View>
        );
}
