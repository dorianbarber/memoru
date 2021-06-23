import React from 'react'
import { StyleSheet, TextInput } from 'react-native';


function Notes({ text, setText }) {
  return (
    <TextInput
      style={styles.input}
      onChangeText={setText}
      value={text}
      multiline={true}
      placeholder={'Content'}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 30,
    fontSize: 20,
    // backgroundColor: 'red',
  }
});

export default Notes
