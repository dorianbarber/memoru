import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import FormPicker from './FormPicker.js';
import LabelInput from './LabelInput.js';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function LabelFormPair({ index, label, form, onChange, onDelete }) {

  const handleLabelChange = (newLabel) => {
    onChange(index, newLabel, form);
  };

  const handleFormPickerChange = (newForm) => {
    onChange(index, label, newForm);
  };

  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
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
      <TouchableNativeFeedback
        onPress={onDelete}
      >
        <View style={styles.touchable}>
          <MaterialIcons name='delete' size={30} color='#a3a2a2' />
        </View>
      </TouchableNativeFeedback>
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
    width: '83%',
    margin: 10,
  },
  touchable: {
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default LabelFormPair;