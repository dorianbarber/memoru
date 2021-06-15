import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import {db} from '../../firebase'

function SubmitButton({templateList, title}) {
  const userTemplateDB = db.collection('users').doc('userTest').collection('template')

  const submitHandler = () => {
    if(userTemplateDB){
      userTemplateDB.doc(`${title}`).set({templateList})
      .then(() => {
        console.log('template set')
        console.log(title)
        console.log(templateList)
      })
      .catch((error) => {
        console.log(error)
      })
    } else{
      console.log('No account storage located')
    }
  }

  return(
    <TouchableNativeFeedback
      onPress={submitHandler}
      background={TouchableNativeFeedback.Ripple('#696969', true, 35)}
    >
      <View style={styles.touchable}>
        <AntDesignIcon name='checkcircleo' size={30} color='white'/>
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