import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

import MenuIcon from './headerComponents/MenuIcon.js';
import NotesHeaderButtons from './headerComponents/NotesHeaderButtons';


function NotesHeader() {
  return (
    <View>
      <Header
        leftComponent={MenuIcon}
        rightComponent={<NotesHeaderButtons />}
        containerStyle={styles.header}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder='Title'
        placeholderTextColor='#696969'
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 140,
  },
  header: {
    position: 'relative',
    backgroundColor: '#000',
    height: 90,
    borderWidth: 0,
  },
  input: {
    position: 'relative',
    height: 50,
    color: 'white',
    backgroundColor: 'black',
    paddingLeft: 50,
    paddingTop: 8,
    paddingBottom: 5,
    fontSize: 35,
  },
});

export default NotesHeader
