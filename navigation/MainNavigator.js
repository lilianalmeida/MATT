import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LoadingScreen from "../screens/LoadingScreen";
import AnimationScreen from "../screens/AnimationScreen";
import EditRoutinesTimesScreen from "../screens/EditRoutinesTimesScreen";
import colors from "../config/colors";

const MainStack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <MainStack.Navigator
            headerMode="none"
            initialRouteName="Animation"
            screenOptions={{
                cardStyle: { backgroundColor: colors.white },
                headerShown: false,
            }}
        >
            <MainStack.Screen
                name="Animation"
                component={AnimationScreen}
                options={{ animation: "none" }}
            />
            <MainStack.Screen
                name="Home"
                component={HomeScreen}
                options={{ animation: "none" }}
            />
            <MainStack.Screen name="Settings" component={SettingsScreen} />
            <MainStack.Screen
                name="EditRoutinesTimes"
                component={EditRoutinesTimesScreen}
            />
            <MainStack.Screen name="Loading" component={LoadingScreen} />
        </MainStack.Navigator>
    );
}
