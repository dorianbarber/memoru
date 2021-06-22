import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

import MenuIcon from './headerComponents/MenuIcon.js';
import NotesHeaderButtons from './headerComponents/NotesHeaderButtons';


function NotesHeader({optionsActive, setOptionsActive}) {
  const [notesTitle, onNotesChangeTitle] = useState('');

  return (
    <View>
        <Header
        leftComponent={MenuIcon}
        rightComponent={<NotesHeaderButtons 
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
    position: 'relative',
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
    paddingLeft: 50,
    paddingTop: 8,
    paddingBottom: 5,
    fontSize: 35,

    zIndex: 1,
    elevation: 1,
  },
});

export default NotesHeader
