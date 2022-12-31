import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Home from "../screens/Home";
import MenuCard from "../screens/MenuCard";
import { useCheckAppStore } from "../utils/useCheckAppStore";
import { AppStyle } from "../globalDefinitions/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();
const InternalLayout = () => {
    const insets = useSafeAreaInsets();

    useCheckAppStore();

    return (
        <View style={AppStyle(insets).applicationStyle}>
            <StatusBar style="light" />

            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "black",
                    tabBarStyle: {
                        backgroundColor: "gray",
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    options={({ route }) => ({
                        headerShown: false,
                        // headerStyle: {
                        //     backgroundColor: "gray",
                        //     height: 25,
                        // },
                        // headerTintColor: "black",
                    })}
                    component={Home}
                />
                <Tab.Screen
                    name="Menu Card"
                    options={({ route }) => ({
                        headerShown: false,
                    })}
                    component={MenuCard}
                />
            </Tab.Navigator>
        </View>
    );
};
export default InternalLayout;
