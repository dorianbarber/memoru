import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';


function Notes({ text, onChangeText }) {
  return (
    <View style={styles.inputContainer}>
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
  inputContainer: {
    elevation: 10
  },
  input: {
    padding: 30,
    fontSize: 20,
  }
});

export default Notes
