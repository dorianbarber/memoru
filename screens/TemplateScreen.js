import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TemplateHeader from '../components/headers/TemplateHeader.js'


function HomeScreen() {
  return (
    <View style={styles.container}>
      <TemplateHeader/>
      <StatusBar
        style='light' 
        backgroundColor='#000'
      />
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