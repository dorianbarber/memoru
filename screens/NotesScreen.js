import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import NotesHeader from '../components/headers/NotesHeader';
import TemplateHeader from '../components/headers/TemplateHeader.js';
import Notes from '../components/notes/Notes.js';

function NotesScreen() {
  return (
    <View style={styles.container}>
      <TemplateHeader />
      <Notes />
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

export default NotesScreen
