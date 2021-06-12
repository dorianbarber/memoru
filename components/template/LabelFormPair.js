import React from 'react';
import { StyleSheet, View } from 'react-native';
import FormPicker from './FormPicker.js';
import LabelInput from './LabelInput.js';

function LabelFormPair({ index, label, form, onChange }) {

  const handleLabelChange = (newLabel) => {
    onChange(index, newLabel, form);
  };

  const handleFormPickerChange = (newForm) => {
    onChange(index, label, newForm);
  }

  return (
    <View style={styles.container}>
      <LabelInput
        label={label}
        onChange={handleLabelChange}
      />
      <FormPicker 
        form={form} 
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
});

export default LabelFormPair;