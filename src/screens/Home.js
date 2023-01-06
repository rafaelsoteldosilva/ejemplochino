import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Button,
    Image,
    Pressable,
    Modal,
    StyleSheet,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";
import * as globalConstants from "../globalDefinitions/globalConstants";
import RatingReviewsAndSharing from "../components/RatingReviewsAndSharing";

import store from "../appStore/store";

import { getRestaurantMenu } from "../slices/restaurantMenuSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
    AppStyle,
    globalImageStyle,
    globalTextStyle,
} from "../globalDefinitions/globalStyles";
import StarRating from "../components/StarRating";

export default function Home() {
    // const { screenText, setScreenText } = React.useContext(ScreenTextContext);
    const menu = useSelector(getRestaurantMenu);
    const insets = useSafeAreaInsets();
    const [modalVisible, setModalVisible] = useState(false);

    // const status = useSelector(getRestaurantMenuStatus);

    // If data is not loaded show Loading...
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
            <View style={[AppStyle(insets).applicationStyle]}>
                <Image
                    source={{ uri: menu.restaurant.facade_image_url }}
                    style={{
                        width: 360,
                        height: 150,
                        marginBottom: 10,
                    }}
                />

                <View>
                    <RatingReviewsAndSharing
                        starRatingAverage={
                            menu.restaurant_reviews.reviews_average
                                .number_of_stars__avg
                        }
                    />
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    itemBox: {
        backgroundColor: "#6669A3",
        padding: 8,
        borderRadius: 8,
        marginLeft: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
