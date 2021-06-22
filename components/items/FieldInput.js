import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import DateInput from '../inputs/DateInput.js';
import FractionInput from '../inputs/FractionInput.js';

function FieldInput({ index, form, data, onChange }) {
  const [value, setValue] = useState(data);

  const onDataChange = (newData) => {
    onChange(index, newData);
    setValue(newData);
  }

  const returnFormInput = (form) => {
    switch(form) {
      case 'text':
        return <TextInput
          style={styles.text} 
          value={value}
          onChangeText={onDataChange}
          multiline={true}
          placeholder='Content'
        />;
      case 'number':
        return <TextInput
          value={value}
          onChangeText={onDataChange}
          keyboardType='number-pad'
        />;
      case 'fraction':
        return <FractionInput onChange={onDataChange} startFrac={value}/>;
      case 'date':
        return <DateInput onChange={onDataChange}/>;
    }
  };

  return (
    <View style={styles.container}>
      {returnFormInput(form)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '60%',
    fontSize:  17,
    flex: 1,
    borderBottomWidth: 1,
  },  
  text: {
    fontSize: 17,
  },  
  fraction: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 17,
  },
});

export default FieldInput;