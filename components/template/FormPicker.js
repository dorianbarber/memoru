import React from 'react';
import { Picker, StyleSheet, View } from 'react-native';

function FormPicker({ form, onChange }) {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picker: {
    flex: 1,
  },
  colour: {
    color: '#fff',
    backgroundColor: '#000',
  },
});

export default FormPicker;