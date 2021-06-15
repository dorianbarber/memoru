import React from 'react';
import { StyleSheet, View } from 'react-native';

import ShareButton from '../../buttons/ShareButton.js';
import SubmitButton from '../../buttons/SubmitButton.js';

function TemplateHeaderButtons({onSubmit}) {
  return (
    <View style={styles.rightSideItems}>
      <ShareButton message='template is dope'/>
      <SubmitButton onSubmit={onSubmit}/>
    </View>
  );
}

const styles = StyleSheet.create({
  rightSideItems:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: '#fff',
    top: 15,
    width: 100,
  },
});

export default TemplateHeaderButtons;