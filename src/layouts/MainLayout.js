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

const MainStack = createStackNavigator();
const MainLayout = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={AppStyle(insets).applicationStyle}>
            <StatusBar style="light" />
            <MainStack.Navigator
                initialRouteName={"InternalLayout"}
                screenOptions={{
                    headerShown: true,
                    headerStatusBarHeight: 25,
                }}
            >
                <MainStack.Screen
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
                <MainStack.Screen
                    name="InternalLayout"
                    options={{
                        headerShown: false,
                    }}
                    component={InternalLayout}
                />
                {/* <MainStack.Screen
                    name="Drawer"
                    options={{
                        headerShown: false,
                    }}
                    component={MyDrawer}
                /> */}
            </MainStack.Navigator>
        </View>
    );
};
export default MainLayout;
