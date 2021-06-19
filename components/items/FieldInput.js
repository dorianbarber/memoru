import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import DateInput from '../inputs/DateInput.js';

function FieldInput({ index, form, data, onChange }) {
  const [value, setValue] = useState(data);
  const [num, setNum] = useState(0);
  const [denom, setDenom] = useState(0);

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
          onChange={onDataChange}
          multiline={true}
          placeholder='Content'
        />;
      case 'number':
        return <TextInput
          value={value}
          onChange={onDataChange}
          keyboardType='number-pad'
        />;
      case 'fraction':
        return <View styles={styles.fraction}>
          <TextInput
            style={styles.text} 
            value={num}
            onChange={setNum}
            placeholder='Numerator'
            keyboardType='number-pad'
          />
          <TextInput
            style={styles.text} 
            value={denom}
            onChange={setDenom}
            placeholder='Denominator'
            keyboardType='number-pad'
          />
        </View>;
      case 'date':
        return <DateInput onChange={setValue}/>;
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