import React from 'react';
import { Picker, StyleSheet } from 'react-native';

function FormPicker({ form, onChange }) {
  return (
    <Picker
      style={styles.picker}
      selectedValue={form}
      onValueChange={(itemValue, _) => onChange(itemValue)}
      mode='dropdown'
    >
      <Picker.Item label='Text' value='text'/>
      <Picker.Item label='Number' value='number'/>
      <Picker.Item label='Fraction' value='fraction'/>
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