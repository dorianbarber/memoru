import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import FormPicker from './FormPicker.js';

function LabelFormPair() {
  const [label, setLabel] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.label}
        onChangeText={setLabel}
        value={label}
        placeholder='Label'
        placeholderTextColor='#696969'
      />
      <FormPicker/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#696969',
    width: 325,
  },
  label: {
    width: 150,
    fontSize: 15,
    paddingLeft: 10,
    borderRightWidth: 1,
    borderColor: '#696969',
  },
});

export default LabelFormPair;