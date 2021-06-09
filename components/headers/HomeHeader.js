import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import MenuIcon from '../headerComponents/MenuIcon.js';
import HeaderText from '../headerComponents/HeaderText.js';
import HeaderButtons from '../headerComponents/HeaderButtons.js';


function HomeHeader() {
  return (
    <Header
      leftComponent={MenuIcon}
      centerComponent={<HeaderText text='Memoru'/>}
      rightComponent={HeaderButtons}
      containerStyle={styles.header}
    />
  );  
}


const styles = StyleSheet.create({
  //Entire header
  header: {
    position: 'absolute',
    backgroundColor: '#000',
    height: 140,
  },
});

export default HomeHeader;