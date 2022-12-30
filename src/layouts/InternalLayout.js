import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Home from "../screens/Home";
import MenuCard from "../screens/MenuCard";
import { useCheckAppStore } from "../utils/useCheckAppStore";

const Tab = createBottomTabNavigator();
const InternalLayout = () => {
    useCheckAppStore();

    return (
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
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: "gray",
                        height: 25,
                    },
                    headerTintColor: "black",
                })}
                component={Home}
            />
            <Tab.Screen
                name="Menu Card"
                options={({ route }) => ({
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: "gray",
                        height: 25,
                    },
                    headerTintColor: "black",
                })}
                component={MenuCard}
            />
        </Tab.Navigator>
    );
};
export default InternalLayout;
