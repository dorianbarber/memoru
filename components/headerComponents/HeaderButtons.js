import React from 'react';
import { StyleSheet, View } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import ShareButton from '../buttons/ShareButton.js';

function HeaderButtons() {
  return (
    <View style={styles.rightSideItems}>
      <FontistoIcon name='search' size={20} color='white' />
      <ShareButton message='memoru is dope'/>
      <EntypoIcon name='dots-three-vertical' size={20} color='white' />
    </View>
  );
}


const styles = StyleSheet.create({
  rightSideItems:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#fff',
    top: 15,
    width: 100,
  },
});

export default HeaderButtons;