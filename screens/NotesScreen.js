import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TemplateHeader from '../components/headers/TemplateHeader.js';
import Notes from '../components/notes/Notes.js';

function NotesScreen() {
  [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TemplateHeader />
      <Notes text={text} onChangeText={setText}/>
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

export default NotesScreen
