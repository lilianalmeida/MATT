import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LoadingScreen from "../screens/LoadingScreen";
import EditRoutinesTimesScreen from "../screens/EditRoutinesTimesScreen";
import colors from "../config/colors";

const MainStack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
		<MainStack.Navigator
			headerMode="none"
			initialRouteName="Home"
			screenOptions={{
				cardStyle: { backgroundColor: colors.white },
				headerShown: false
			}}
		>
			<MainStack.Screen name="Home" component={HomeScreen} />
			<MainStack.Screen name="Settings" component={SettingsScreen} />
			<MainStack.Screen name="EditRoutinesTimes" component={EditRoutinesTimesScreen} />
			<MainStack.Screen name="Loading" component={LoadingScreen} />
		</MainStack.Navigator>
	);
}
