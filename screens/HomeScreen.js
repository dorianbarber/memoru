import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import HomeHeader from '../components/headers/HomeHeader.js';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader/>
      <StatusBar
        style='light' 
        backgroundColor='#000'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 30,
  },
});

export default HomeScreen;