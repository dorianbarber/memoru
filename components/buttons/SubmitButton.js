import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';

import EntypoIcon from 'react-native-vector-icons/Entypo';

function SubmitButton({onSubmit}) {
  return(
    <TouchableNativeFeedback
      onPress={onSubmit}
      background={TouchableNativeFeedback.Ripple('#696969', true, 20)}
    >
      <View style={styles.touchable}>
        <EntypoIcon name='check' size={20} color='white'/>
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