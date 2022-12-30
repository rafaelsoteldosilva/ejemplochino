import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "../src/appStore/store";
import MainLayout from "./layouts/MainLayout";

import { ScreenTextContextProvider } from "./globalContexts/screenTextContext";
import MyDrawer from "./drawer/MyDrawer";

export default function MainApp() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <ScreenTextContextProvider>
                    <MainLayout />
                </ScreenTextContextProvider>
            </NavigationContainer>
        </Provider>
    );
}
