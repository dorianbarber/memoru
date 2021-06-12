import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import FormPicker from './FormPicker.js';

function LabelFormPair({ index, label, form, onChange }) {
  const [labelInput, setLabelInput] = useState(label);
  const [selectedForm, setSelectedForm] = useState(form);

  const handleLabelChange = (newLabel) => {
    onChange(index, newLabel, selectedForm);
    setLabelInput(newLabel);
  };

  const handleFormPickerChange = (newForm) => {
    onChange(index, labelInput, newForm);
    setSelectedForm(selectedForm);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.label}
        onChangeText={handleLabelChange}
        value={labelInput}
        placeholder='Label'
        placeholderTextColor='#696969'
      />
      <FormPicker 
        form={selectedForm} 
        onChange={handleFormPickerChange}
      />
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
    margin: 10,
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