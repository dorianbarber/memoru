import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import DateInput from '../inputs/DateInput.js';

function FieldInput({ form, onChange }) {
  const [value, setValue] = useState(null);

  const returnFormInput = (form) => {
    switch(form) {
      case 'text':
        return <TextInput 
          value={value}
          onChange={setValue}
          multiline={true}
        />;
      case 'number':
        return <TextInput
          value={value}
          onChange={setValue}
          keyboardType='number-pad'
        />;
      case 'fraction':
        return <View styles={styles.fraction}>
          <TextInput
            value={value}
            onChange={(numb) => (setValue([numb, value[1]]))}
            placeholder='numerator'
            placeholderTextColor='#696969'
            keyboardType='number-pad'
          />
          <TextInput
            value={value}
            onChange={(numb) => (setValue([value[0], numb]))}
            placeholder='denominator'
            placeholderTextColor='#696969'
            keyboardType='number-pad'
          />
        </View>;
      case 'date':
        return <DateInput onChange={setValue}/>;
    }
  };

  return (
    returnFormInput(form)
  );
}

const styles = StyleSheet.create({
  fraction: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default FieldInput;