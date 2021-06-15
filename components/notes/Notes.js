import React from 'react'
import { StyleSheet, TextInput } from 'react-native';


function Notes({ text, onChangeText }) {
  return (
    <TextInput 
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      multiline={true}
      placeholder={'Content'}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 20,
    fontSize: 20,
  }
});

export default Notes
