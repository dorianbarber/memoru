import React, {useState} from 'react'
import { View, TouchableNativeFeedback, StyleSheet, Text } from 'react-native';

import EntypoIcon from 'react-native-vector-icons/Entypo';

import OptionsList from './optionBtnOptions/OptionsList'

function OptionsButton() {
    const [optionsActive, setOptionsActive] = useState(false)

    const onOptions = () => {
      if (!optionsActive) {
        setOptionsActive(true)
      } else {
        setOptionsActive(false)
      }
    }


    return (
      <View style={styles.container}>
        <TouchableNativeFeedback 
          onPress={onOptions}
          background={TouchableNativeFeedback.Ripple('#696969', true)}
        >
          <View style={styles.touchable}>
              <EntypoIcon name='dots-three-vertical' size={25} color='white' />
          </View>
        </TouchableNativeFeedback>
        {optionsActive && <OptionsList />}
      </View>  
    );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  touchable: {
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default OptionsButton
