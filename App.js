import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import MainNavigator from './navigation/MainNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="auto" />
        <MainNavigator/>
    </NavigationContainer>
  );
}

