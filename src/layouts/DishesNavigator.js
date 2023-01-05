import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { AppStyle } from "../globalDefinitions/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import ShowDishes from "../screens/ShowDishes";
import ShowDish from "../screens/ShowDish";

const DishesStack = createStackNavigator();
const DishesNavigator = (props) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={AppStyle(insets).applicationStyle}>
            <StatusBar style="light" />

            <DishesStack.Navigator initialRouteName={"ShowDishes"}>
                <DishesStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="ShowDishes"
                    component={ShowDishes}
                />
                <DishesStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="ShowDish"
                    component={ShowDish}
                />
            </DishesStack.Navigator>
        </View>
    );
};
export default DishesNavigator;
