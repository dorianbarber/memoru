import React from 'react';
import { StyleSheet, View } from 'react-native';

import OptionsButton from '../../buttons/OptionsButton'
import SearchButton from '../../buttons/SearchButton.js'
import ShareButton from '../../buttons/ShareButton.js';

function HeaderButtons() {
  return (
    <View style={styles.rightSideItems}>
      <ShareButton message='memoru is dope'/>
      <SearchButton />
      <OptionsButton />
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