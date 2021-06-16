import React from 'react';
import { StyleSheet, View } from 'react-native';

import ShareButton from '../../buttons/ShareButton.js';
import SubmitButton from '../../buttons/SubmitButton.js';

function NewItemHeaderButtons() {
  return (
    <View style={styles.rightSideItems}>
      <ShareButton message='new items are dope'/>
    </View>
  );
}

const styles = StyleSheet.create({
  rightSideItems:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: '#fff',
    width: 100,
    paddingTop: 10,
  },
});

export default NewItemHeaderButtons;