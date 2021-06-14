import React from 'react';
import { TextInput } from 'react-native';

function FormSupplement({form}) {
  
  switch (form) {
    case 'picker':
      return (
        <TextInput
          style={{ fontSize: 14, paddingLeft: 7, paddingBottom: 5}}
          onChangeText={(newValue) => setValue(newValue.split('\u2022').join('').split('\n'))}
          value={(value.map(x => `\u2022${x}`)).join('\n')}
          placeholder='Options'
          placeholderTextColor='#696969'
          multiline={true}
        />
      );
    
    default:
      return null;
  };
}

export default FormSupplement;

