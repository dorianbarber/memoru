import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen.js';

export default function App() {
  return (
      <View style={{ flex: 1 }}>
        <StatusBar 
          style='light' 
          backgroundColor='black'/>
        <HomeScreen/>
      </View>
  );
}

