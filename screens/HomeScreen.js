import React from 'react';
import { View, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import HomeHeader from '../components/headers/HomeHeader.js';
import HomeActionButton from '../components/buttons/HomeActionButton.js';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <HomeHeader/>
      <StatusBar
        style='light' 
        backgroundColor='#000'/>
      <HomeActionButton navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
});

export default HomeScreen;