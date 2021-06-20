import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text} from 'react-native';

function FractionInput({ onChange, startFrac={ num: 0, denom: 0} }) {
  const [frac, setFrac] = useState(startFrac);

  const handleChange = (num, denom) => {
    const newFrac = {num: num, denom: denom};
    setFrac(newFrac);
    onChange(newFrac);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text} 
        value={frac.num}
        onChangeText={(num) => handleChange(num, frac.denom)}
        placeholder='Numerator'
        keyboardType='number-pad'
      />
      <Text style={styles.vinculum}>{'/'}</Text>
      <TextInput
        style={styles.text} 
        value={frac.denom}
        onChangeText={(denom) => handleChange(frac.num, denom)}
        placeholder='Denominator'
        keyboardType='number-pad'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: 17,
  },
  vinculum: {
    padding: 5,
    fontSize: 17, 
  },
});

export default FractionInput;