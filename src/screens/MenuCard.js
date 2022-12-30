import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { getRestaurantMenu } from "../slices/restaurantMenuSlice";

import { AppStyle } from "../globalDefinitions/globalStyles";
import { ShowAnItem } from "../components/ShowAnItem";

export default function MenuCard() {
    const menu = useSelector(getRestaurantMenu);

    function showMenu() {
        console.log(menu.categories[0].category.id);
    }

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