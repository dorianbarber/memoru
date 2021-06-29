import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

import MenuIcon from './headerComponents/MenuIcon.js';
import NotesHeaderButtons from './headerComponents/NotesHeaderButtons';
import { postNewNotes } from '../../firebase/posts'


function NotesHeader({ text, optionsActive, setOptionsActive }) {
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
        rightComponent={<NotesHeaderButtons title={title} text={text} 
                         optionsActive={optionsActive} 
                         setOptionsActive={setOptionsActive}
                        />}
        containerStyle={styles.header}
      />
      <View pointerEvents= {optionsActive ?'none' : 'auto'}>
        <TextInput
          style={styles.input}
          onChangeText={onNotesChangeTitle}
          value={notesTitle}
          placeholder='Title'
          placeholderTextColor='#696969'
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 140,
    zIndex: 1,
    elevation: 1,
  },
  header: {
    backgroundColor: '#000',
    height: 90,
    borderWidth: 0,

    zIndex: 3,
    elevation: 3,
  },
  input: {
    height: 50,
    color: 'white',
    backgroundColor: '#000',
    paddingLeft: 25,
    paddingTop: 8,
    paddingBottom: 5,
    fontSize: 33,

    zIndex: 1,
    elevation: 1,
  },
});

export default NotesHeader
