import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TemplateHeader from '../components/headers/TemplateHeader.js';
import Template from '../components/template/Template.js';


function TemplateScreen() {
  return (
    <View style={styles.container}>
      <TemplateHeader/>
      <Template/>
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
    // paddingTop: 30,
  },
});

export default TemplateScreen;