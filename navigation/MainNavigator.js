import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LoadingScreen from "../screens/LoadingScreen";
import AnimationScreen from "../screens/AnimationScreen";

const MainStack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <MainStack.Navigator
            headerMode="none"
            initialRouteName="Animation"
            screenOptions={{
                cardStyle: { backgroundColor: "#fff" },
                headerShown: false,
            }}
        >
            <MainStack.Screen name="Animation" component={AnimationScreen} />
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="Settings" component={SettingsScreen} />
            <MainStack.Screen name="Loading" component={LoadingScreen} />
        </MainStack.Navigator>
    );
}
