import React, {useState} from 'react'
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import OptionsList from './optionBtnOptions/OptionsList'

function OptionsButton() {
    const [optionsActive, setOptionsActive] = useState(false)

    const onOptions = () => {
        if(!optionsActive){
        setOptionsActive(true)
        }else{
         setOptionsActive(false)
        }
    }


    return (
        <>
            <TouchableNativeFeedback 
            onPress={onOptions}
            background={TouchableNativeFeedback.Ripple('#696969', true)}
                >
                <View style={styles.touchable}>
                    <EntypoIcon name='dots-three-vertical' size={20} color='white' />
                </View>
            </TouchableNativeFeedback>

            {optionsActive && <OptionsList setOptionsActive={setOptionsActive} />}
            
        </>
    )
}

const styles = StyleSheet.create({
  touchable: {
    alignContent: 'center',
    justifyContent: 'center',
  },
});


export default OptionsButton
