import React, {useState} from 'react'
import { View, StyleSheet, TextInput } from 'react-native';


function Notes({ text, onChangeText, optionsActive, setOptionsActive }) {

  return (
    <View 
    pointerEvents= {optionsActive ?'none' : 'auto'} >
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        multiline={true}
        placeholder={'Content'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 30,
    fontSize: 20,
    backgroundColor: 'white',
  }
});

export default Notes
