import React, { useState } from 'react';
import { Picker, StyleSheet, View } from 'react-native';
//import { Picker } from '@react-native-picker/picker';

function FormPicker() {
  const [selectedForm, setSelectedForm] = useState('Text');

  return (
    <Picker
      style={styles.picker}
      selectedValue={selectedForm}
      onValueChange={(itemValue, _) => setSelectedForm(itemValue)}
      mode='dropdown'
    >
      <Picker.Item label='Text' value='text'/>
      <Picker.Item label='Number' value='number'/>
      <Picker.Item label='Fraction' value='Fraction'/>
      <Picker.Item label='Date' value='date'/>
      <Picker.Item label='Picker' value='picker'/>
    </Picker>
  );
}

const styles = StyleSheet.create({
  picker: {
    height: 45,
    width: 150,
  },
  colour: {
    color: '#fff',
    backgroundColor: '#000',
  },
});

export default FormPicker;