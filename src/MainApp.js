import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "../src/appStore/store";
import MainLayout from "./layouts/MainLayout";
import { Text } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import {
    useFonts,
    LobsterTwo_400Regular,
    LobsterTwo_400Regular_Italic,
    LobsterTwo_700Bold,
    LobsterTwo_700Bold_Italic,
} from "@expo-google-fonts/lobster-two";

export default function MainApp() {
    let [fontsLoaded] = useFonts({
        LobsterTwo_400Regular,
        LobsterTwo_400Regular_Italic,
        LobsterTwo_700Bold,
        LobsterTwo_700Bold_Italic,
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <SafeAreaProvider>
                        <MainLayout />
                    </SafeAreaProvider>
                </NavigationContainer>
            </Provider>
        );
    }
}
