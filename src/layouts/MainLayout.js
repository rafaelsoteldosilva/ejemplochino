import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInSignUp from "../screens/SignInSignUp";
import InternalLayout from "./InternalLayout";
import { ScreenTextContext } from "../globalContexts/screenTextContext";
import MyDrawer from "../drawer/MyDrawer";

const Stack = createStackNavigator();
const MainLayout = () => {
    const { screenText, setScreenText } = React.useContext(ScreenTextContext);

    return (
        <Stack.Navigator
            initialRouteName={"InternalLayout"}
            screenOptions={{
                headerShown: true,
                headerStatusBarHeight: 20,
            }}
        >
            <Stack.Screen
                name="Signin"
                navigationOptions={{
                    headerShown: false,
                }}
                options={{
                    title: `${screenText}`,
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
    );
};
export default MainLayout;
