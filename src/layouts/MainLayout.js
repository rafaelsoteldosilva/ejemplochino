import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInSignUp from "../screens/SignInSignUp";
import InternalLayout from "./InternalLayout";
// import { ScreenTextContext } from "../globalContexts/screenTextContext";
import MyDrawer from "../drawer/MyDrawer";
import { AppStyle } from "../globalDefinitions/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();
const MainLayout = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={AppStyle(insets).applicationStyle}>
            <StatusBar style="light" />
            <Stack.Navigator
                initialRouteName={"InternalLayout"}
                screenOptions={{
                    headerShown: true,
                    headerStatusBarHeight: 25,
                }}
            >
                <Stack.Screen
                    name="Signin"
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
                    component={SignInSignUp}
                />
                <Stack.Screen
                    name="InternalLayout"
                    options={{
                        headerShown: false,
                    }}
                    component={InternalLayout}
                />
                <Stack.Screen
                    name="Drawer"
                    options={{
                        headerShown: false,
                    }}
                    component={MyDrawer}
                />
            </Stack.Navigator>
        </View>
    );
};
export default MainLayout;
