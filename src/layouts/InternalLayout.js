import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Home from "../screens/Home";
import { useCheckAppStore } from "../utils/useCheckAppStore";
import { AppStyle } from "../globalDefinitions/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import ShowCategories from "../screens/ShowCategories";
import { ArgumentContextProvider } from "../globalContexts/argumentContext";
import ShowDishes from "../screens/ShowDishes";
import ShowDish from "../screens/ShowDish";

const InternalTab = createBottomTabNavigator();
const InternalLayout = () => {
    const insets = useSafeAreaInsets();

    useCheckAppStore();

    return (
        <ArgumentContextProvider>
            <View style={AppStyle(insets).applicationStyle}>
                <StatusBar style="light" />

                <InternalTab.Navigator
                    initialRouteName="Menu Card"
                    screenOptions={{
                        tabBarActiveTintColor: "white",
                        tabBarInactiveTintColor: "black",
                        tabBarStyle: {
                            backgroundColor: "gray",
                        },
                    }}
                >
                    <InternalTab.Screen
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
                    <InternalTab.Screen
                        name="Menu Card"
                        options={({ route }) => ({
                            headerShown: false,
                        })}
                        component={ShowCategories}
                    />
                    <InternalTab.Screen
                        name="ShowDishes"
                        component={ShowDishes}
                        options={({ route }) => ({
                            headerShown: false,
                            tabBarButton: () => null,
                            tabBarVisible: false, //hide tab bar on this screen
                        })}
                    />
                    <InternalTab.Screen
                        name="ShowDish"
                        component={ShowDish}
                        options={({ route }) => ({
                            headerShown: false,
                            tabBarButton: () => null,
                            tabBarVisible: false, //hide tab bar on this screen
                        })}
                    />
                </InternalTab.Navigator>
            </View>
        </ArgumentContextProvider>
    );
};
export default InternalLayout;
