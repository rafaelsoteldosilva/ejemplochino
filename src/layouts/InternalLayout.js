import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Home from "../screens/Home";
import { useCheckAppStore } from "../utils/useCheckAppStore";
import { AppStyle } from "../globalDefinitions/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import ShowCategories from "../screens/ShowCategories";
import ShowDishes from "../screens/ShowDishes";

const MainTab = createBottomTabNavigator();
const InternalLayout = () => {
    const insets = useSafeAreaInsets();

    useCheckAppStore();

    return (
        <View style={AppStyle(insets).applicationStyle}>
            <StatusBar style="light" />

            <MainTab.Navigator
                initialRouteName="Menu Card"
                screenOptions={{
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "black",
                    tabBarStyle: {
                        backgroundColor: "gray",
                    },
                }}
            >
                <MainTab.Screen
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
                <MainTab.Screen
                    name="Menu Card"
                    options={({ route }) => ({
                        headerShown: false,
                    })}
                    component={ShowCategories}
                />
                <MainTab.Screen
                    name="ShowDishes"
                    component={ShowDishes}
                    options={({ route }) => ({
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false, //hide tab bar on this screen
                    })}
                />
            </MainTab.Navigator>
        </View>
    );
};
export default InternalLayout;
