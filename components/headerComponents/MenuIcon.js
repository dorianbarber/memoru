import React from 'react';
import { StyleSheet, View } from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

function MenuIcon() {
  return (
    <View style={styles.menu}>
      <SimpleLineIcon name='menu' size={30} color='white' />
    </View>
  );
}

const styles = StyleSheet.create({
  menu:{
    margin: 0,
    padding: 0,
    top: 10,
  },
})


export default MenuIcon;