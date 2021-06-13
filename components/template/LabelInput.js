import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

function LabelInput({ label, onChange }) {
  return (
    <TextInput
      style={styles.label}
      onChangeText={(newLabel) => onChange(newLabel)}
      value={label}
      placeholder='Label'
      placeholderTextColor='#696969'
    />
  );
}

const styles = StyleSheet.create({
  label: {
    // width: 150,
    flex: 1,
    fontSize: 15,
    paddingLeft: 10,
    borderRightWidth: 1,
    borderColor: '#696969',
  },
});

export default LabelInput;