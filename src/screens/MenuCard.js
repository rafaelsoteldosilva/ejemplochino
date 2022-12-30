import React from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { getRestaurantMenu } from "../slices/restaurantMenuSlice";

import { AppStyle } from "../globalDefinitions/globalStyles";

export default function MenuCard() {
    return (
        <View style={AppStyle.appStyle}>
            <Text style={{ marginTop: 50, color: "white" }}>Menu Card</Text>
        </View>
    );
}
