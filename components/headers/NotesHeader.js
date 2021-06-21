import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

import MenuIcon from './headerComponents/MenuIcon.js';
import NotesHeaderButtons from './headerComponents/NotesHeaderButtons';


function NotesHeader({text}) {
  const[title, onChangeTitle] = useState('')

  return (
    <View>
      <Header
        leftComponent={<MenuIcon/>}
        rightComponent={<NotesHeaderButtons title={title} text={text}/>}
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
    backgroundColor: '#000',
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
