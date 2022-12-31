import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "../src/appStore/store";
import MainLayout from "./layouts/MainLayout";

import { ScreenTextContextProvider } from "./globalContexts/screenTextContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function MainApp() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <ScreenTextContextProvider>
                        <MainLayout />
                    </ScreenTextContextProvider>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
}
