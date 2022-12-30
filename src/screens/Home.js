import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantMenu, getMenu } from "../slices/restaurantMenuSlice";
import store from "../appStore/store";

import { ScreenTextContext } from "../globalContexts/screenTextContext";

import { AppStyle } from "../globalDefinitions/globalStyles";

export default function Home() {
    const { screenText, setScreenText } = React.useContext(ScreenTextContext);
    const dispatch = useDispatch();
    const menu = useSelector(getRestaurantMenu);
    // let menu = {};

    function showMenu() {
        console.log("--------------------------------------------------------");
        console.log("Menu:: ");
        // menu = store.getState().restaurantMenu.restaurantMenu;
        console.log(JSON.stringify(menu, null, 4));
    }

    function reloadMenu() {
        dispatch(getMenu(1));
    }

    function showStatus() {
        console.log(store.getState().restaurantMenu.restaurantMenuStatus);
    }

    return (
        <View style={AppStyle.appStyle}>
            <Text style={{ marginTop: 50, color: "white" }}>Home</Text>
            <Button onPress={showMenu} title="show Menu" />
            <Button onPress={showStatus} title="show status" />
            <Button onPress={reloadMenu} title="reload Menu" />
        </View>
    );
}
