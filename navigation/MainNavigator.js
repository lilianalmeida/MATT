import React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const MainStack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
		<MainStack.Navigator
			headerMode='none'
			initialRouteName='Home'
			screenOptions={{
				cardStyle: { backgroundColor: '#fff' },
				headerShown: false
			}}
		>
			<MainStack.Screen name='Home' component={HomeScreen} />
			<MainStack.Screen name='Settings' component={SettingsScreen} />
		</MainStack.Navigator>
	);


}