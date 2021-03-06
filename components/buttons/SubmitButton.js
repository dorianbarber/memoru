import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

function SubmitButton({ onSubmit }) {

  return(
    <TouchableNativeFeedback
      onPress={onSubmit}
      background={TouchableNativeFeedback.Ripple('#696969', true, 35)}
    >
      <View style={styles.touchable}>
        <AntDesignIcon name='check' size={25} color='white'/>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  touchable: {
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default SubmitButton;