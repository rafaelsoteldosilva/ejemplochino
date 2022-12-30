import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Home from "../screens/Home";
import MenuCard from "../screens/MenuCard";

const Tab = createBottomTabNavigator();
const InternalLayout = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                options={{
                    headerShown: true,
                    statusBar: {
                        visible: true,
                        backgroundColor: "#fff",
                    },
                    headerStyle: {
                        backgroundColor: "gray",
                    },
                    headerTintColor: "black",
                }}
                component={Home}
            />
            <Tab.Screen
                name="Menu Card"
                options={{
                    headerShown: true,
                    statusBar: {
                        visible: true,
                        backgroundColor: "#fff",
                    },
                    headerStyle: {
                        backgroundColor: "gray",
                    },
                    headerTintColor: "black",
                }}
                component={MenuCard}
            />
        </Tab.Navigator>
    );
};
export default InternalLayout;
