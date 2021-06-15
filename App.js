import React from 'react';
import HomeScreen from './screens/HomeScreen.js';
import TemplateScreen from './screens/TemplateScreen.js';
import NotesScreen from './screens/NotesScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

console.disableYellowBox = true;

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='TemplateBuilder' component={TemplateScreen}/>
        <Stack.Screen name='ClassicNotes' component={NotesScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

