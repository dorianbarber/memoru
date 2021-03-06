import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import NotesHeader from '../components/headers/NotesHeader.js'
import Notes from '../components/notes/Notes.js';

function NotesScreen() {
  const [text, setText] = useState('');
  const [optionsActive, setOptionsActive] = useState(false)

  return (
    <View style={styles.container}>
     <View style={styles.notesPageContainer}>
      <NotesHeader 
        text={text}
        optionsActive={optionsActive}
        setOptionsActive={setOptionsActive}
         />
      <Notes 
        text={text} 
        onChangeText={setText}
        optionsActive={optionsActive}
        setOptionsActive={setOptionsActive}
        />
   </View>

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
  notesPageContainer: {
    position: 'absolute',
    elevation: 3,
    zIndex: 3,
  }
});

export default NotesScreen
