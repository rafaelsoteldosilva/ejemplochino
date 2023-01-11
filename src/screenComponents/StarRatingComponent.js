import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
    AppStyle,
    globalImageStyle,
    globalTextStyle,
} from "../globalDefinitions/globalStyles";
import StarRating from "./StarRating";

const StarRatingComponent = ({
    isDish,
    categoryIndex,
    dishIndex,
    errorText,
    setNewStarRating,
}) => {
    return (
        <View style={{ width: "100%" }}>
            <StarRating
                isDish={isDish}
                categoryIndex={categoryIndex}
                dishIndex={dishIndex}
                itIsEditable={true}
                averageRating={-1}
                setNewStarRating={setNewStarRating}
            />
            {/* The leading space before {errorText} is there on purpose */}
            <Text
                style={{
                    color: "red",
                    fontSize: 12,
                    textAlign: "center",
                }}
            >
                {" "}
                {errorText}
            </Text>
        </View>
    );
};

export default StarRatingComponent;

const styles = StyleSheet.create({});
