import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';

import ShareButton from '../../buttons/ShareButton.js';
import SubmitButton from '../../buttons/SubmitButton.js';

function TemplateHeaderButtons({templateList, title}) {

  return (
    <View style={styles.rightSideItems}>
      <ShareButton message='template is dope'/>
      <SubmitButton templateList={templateList} title={title}/>
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
  },
});

export default TemplateHeaderButtons;