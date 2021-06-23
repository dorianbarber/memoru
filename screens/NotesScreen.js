import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import NotesHeader from '../components/headers/NotesHeader';
import Notes from '../components/notes/Notes.js';

function NotesScreen() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <NotesHeader text={text} />
      <Notes text={text} setText={setText} />
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
