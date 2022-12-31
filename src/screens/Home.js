import React, { useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as globalConstants from "../globalDefinitions/globalConstants";

import store from "../appStore/store";

import { getRestaurantMenu } from "../slices/restaurantMenuSlice";

import { AppStyle } from "../globalDefinitions/globalStyles";

export default function Home() {
    // const { screenText, setScreenText } = React.useContext(ScreenTextContext);
    const menu = useSelector(getRestaurantMenu);
    // const status = useSelector(getRestaurantMenuStatus);

    // If data is not loaded show Loading...
    if (
        store.getState().restaurantMenu.restaurantMenuStatus !==
        globalConstants.menuReadingSucceeded
    )
        return <Text style={{ color: "white" }}>Loading...</Text>;
    else
        return (
            <View style={AppStyle.appStyle}>
                {/* <Text style={{ color: "white" }}>Home</Text> */}
                <Image
                    source={{ uri: menu.restaurant.facade_image_url }}
                    style={{
                        width: 360,
                        height: 150,
                        marginBottom: 10,
                        marginTop: 20,
                    }}
                />
            </View>
        );
}
