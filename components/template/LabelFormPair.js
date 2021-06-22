import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import FormPicker from './FormPicker.js';
import LabelInput from './LabelInput.js';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function LabelFormPair({ index, label, form, onChange, onDelete, isStarred, askForStar }) {

  const handleLabelChange = (newLabel) => {
    onChange(index, newLabel, form);
  };

  const handleFormPickerChange = (newForm) => {
    onChange(index, label, newForm);
  };

  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      {
        isStarred 
          ? <View style={styles.touchable}>
              <MaterialIcons name='star' size={30} color='#696969'/>
            </View> 
          : <TouchableNativeFeedback 
              onPress={() => askForStar(index)}
            >
              <View style={styles.touchable}>
                <MaterialIcons name='star-border' size={30} color='#696969'/>
              </View>
            </TouchableNativeFeedback>
      }
      
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
    width: '78%',
    margin: 10,
  },
  touchable: {
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default LabelFormPair;