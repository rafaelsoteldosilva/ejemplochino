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
import ShowReviews from "../screens/ShowReviews";

const BottomTab = createBottomTabNavigator();
const InternalLayout = () => {
    const insets = useSafeAreaInsets();

    useCheckAppStore();

    return (
        <ArgumentContextProvider>
            <View style={AppStyle(insets).applicationStyle}>
                <StatusBar style="light" />

                <BottomTab.Navigator
                    initialRouteName="Menu Card"
                    screenOptions={{
                        tabBarActiveTintColor: "white",
                        tabBarInactiveTintColor: "black",
                        tabBarStyle: {
                            backgroundColor: "gray",
                        },
                    }}
                >
                    <BottomTab.Screen
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
                    <BottomTab.Screen
                        name="Menu Card"
                        options={({ route }) => ({
                            headerShown: false,
                        })}
                        component={ShowCategories}
                    />
                    <BottomTab.Screen
                        name="ShowDishes"
                        component={ShowDishes}
                        options={({ route }) => ({
                            headerShown: false,
                            tabBarButton: () => null,
                            tabBarVisible: false, //hide tab bar on this screen
                        })}
                    />
                    <BottomTab.Screen
                        name="ShowDish"
                        component={ShowDish}
                        options={({ route }) => ({
                            headerShown: false,
                            tabBarButton: () => null,
                            tabBarVisible: false, //hide tab bar on this screen
                        })}
                    />
                    <BottomTab.Screen
                        name="ShowReviews"
                        component={ShowReviews}
                        options={({ route }) => ({
                            headerShown: false,
                            tabBarButton: () => null,
                            tabBarVisible: false, //hide tab bar on this screen
                        })}
                    />
                </BottomTab.Navigator>
            </View>
        </ArgumentContextProvider>
    );
};
export default InternalLayout;
