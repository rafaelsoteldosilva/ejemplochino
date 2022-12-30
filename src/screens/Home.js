import React, { useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantMenu, getMenu } from "../slices/restaurantMenuSlice";
import store from "../appStore/store";

// import { ScreenTextContext } from "../globalContexts/screenTextContext";

import { AppStyle } from "../globalDefinitions/globalStyles";

export default function Home() {
    // const { screenText, setScreenText } = React.useContext(ScreenTextContext);
    const dispatch = useDispatch();
    const menu = useSelector(getRestaurantMenu);

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
