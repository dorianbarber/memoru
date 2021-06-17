import React from 'react';
import { StyleSheet, View } from 'react-native';

import OptionsButton from '../../buttons/OptionsButton.js';
import SearchButton from '../../buttons/SearchButton.js';
import ShareButton from '../../buttons/ShareButton.js';

function HeaderButtons() {
  return (
    <View style={styles.rightSideItems}>
      <ShareButton message='memoru is dope'/>
      <OptionsButton />
    </View>
  );
}


const styles = StyleSheet.create({
  rightSideItems:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 100,
  },
});

export default HeaderButtons;