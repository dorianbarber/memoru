import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

import MenuIcon from './headerComponents/MenuIcon.js';
import NotesHeaderButtons from './headerComponents/NotesHeaderButtons';
import { postNewNotes } from '../../firebase/posts'


function NotesHeader({ text }) {
  const [title, onChangeTitle] = useState('')

  //useEffect saves notes on text change (too many firebase writes)
  
  // useEffect(() => {
  //   postNewNotes('userTest' /*User*/,
  //     title ? title : 'temporary', //If title is empty, title becomes today's date
  //     text)
  // }, [text])

  return (
    <View>
      <Header
        leftComponent={<MenuIcon />}
        rightComponent={<NotesHeaderButtons title={title} text={text} />}
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
