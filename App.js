import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StarMap from './screens/StarMap'
import SpaceCrafts from './screens/SpaceCrafts'
import DailyPic from './screens/DailyPic'
import HomeScreen from './screens/Home'

export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DailyPic" component={DailyPic} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SpaceCrafts" component={SpaceCrafts} />
      <Stack.Screen name="StarMap" component={StarMap} />
      </Stack.Navigator> 
      </NavigationContainer>
    );
  }
}
const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
