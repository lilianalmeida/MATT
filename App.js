import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import MainNavigator from "./navigation/MainNavigator";
import store from "./redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar style="auto" />
                <MainNavigator />
            </NavigationContainer>
        </Provider>
    );
}
