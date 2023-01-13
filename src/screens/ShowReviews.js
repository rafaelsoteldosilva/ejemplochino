import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
    AppStyle,
    globalImageStyle,
    globalTextStyle,
} from "../globalDefinitions/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ScreenHeader from "../components/ScreenHeader";

const ShowReviews = (props) => {
    const insets = useSafeAreaInsets();

    const myReviews = [
        ...props.route.params.propsForShowReviews.reviews.reviews,
    ];
    return (
        <View style={[AppStyle(insets).applicationStyle]}>
            <ScreenHeader
                navigation={props.navigation}
                currentScreen={"Restaurant Reviews"}
                previousScreen={"Home"}
            />
            <FlatList
                data={myReviews}
                keyExtractor={(item) => item.review.id}
                renderItem={({ item, index }) => {
                    return (
                        <Text style={{ color: "white" }}>
                            {item.review.diner_name}
                        </Text>
                    );
                }}
            />
        </View>
    );
};

export default ShowReviews;

const styles = StyleSheet.create({});
