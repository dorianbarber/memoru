import React from 'react';
import { StyleSheet, View } from 'react-native';

import ShareButton from '../../buttons/ShareButton.js';
import SubmitButton from '../../buttons/SubmitButton.js';
import { postNewItem } from '../../../firebase/posts';

function NewItemHeaderButtons({ title, fields, starredItem }) {
  return (
    <View style={styles.rightSideItems}>
      <ShareButton message='new items are dope'/>
      <SubmitButton onSubmit={() => postNewItem('userTest', title, fields[starredItem].data , fields)}/>
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