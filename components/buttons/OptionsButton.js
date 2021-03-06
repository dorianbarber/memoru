import React, {useState} from 'react'
import { View, TouchableNativeFeedback, StyleSheet, Text } from 'react-native';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import OptionsListNotes from './optionBtnOptions/OptionsListNotes'
import OptionsListTemplate from './optionBtnOptions/OptionsListTemplate';
import OptionsListHome from './optionBtnOptions/OptionsListHome';


function OptionsButton({homeHeaderBtnsActive, notesHeaderBtnsActive, optionsActive, setOptionsActive}) {
    const [selectedId, setSelectedId] = useState(null)

    const onOptions = () => {
      if (!optionsActive) {
        setOptionsActive(true)
      } else {
        setOptionsActive(false)
      }
    }

    const onOptionPress = (id) => {
        setOptionsActive(false)
        setSelectedId(id)
        console.log(id)
    }

    const multiOptionsListHandler = () => {
        if(notesHeaderBtnsActive){
          return <OptionsListNotes 
                  setOptionsActive={setOptionsActive}
                  onOptionPress={onOptionPress}
                  />
        } else {
          return  <OptionsListHome 
                  setOptionsActive={setOptionsActive}
                  onOptionPress={onOptionPress}
                 />
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

        {optionsActive && multiOptionsListHandler()}

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
