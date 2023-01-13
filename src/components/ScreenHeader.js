import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const ScreenHeader = ({ navigation, currentScreen, previousScreen }) => {
    function goBack(navigation) {
        navigation.navigate(previousScreen);
    }
    return (
        <View>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 10,
                    backgroundColor: "gray",
                    padding: 10,
                }}
            >
                <Pressable onPress={() => goBack(navigation)}>
                    <Entypo name="chevron-left" size={24} color="white" />
                </Pressable>

                <Text style={{ color: "white", marginLeft: 10, marginTop: 2 }}>
                    {currentScreen} ...
                </Text>
            </View>
        </View>
    );
};

export default ScreenHeader;

const styles = StyleSheet.create({});
