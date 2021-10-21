import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";

import MainNavigator from "./navigation/MainNavigator";
import { getStore, loadStore } from "./redux/store";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadStore().then(() => {
            setIsLoading(false);
        });
    }, []);

    return isLoading ? (
        <AppLoading />
    ) : (
        <Provider store={getStore()}>
            <NavigationContainer>
                <StatusBar style="auto" />
                <MainNavigator />
            </NavigationContainer>
        </Provider>
    );
}
