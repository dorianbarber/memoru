import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

import MenuIcon from './headerComponents/MenuIcon.js';
import HeaderButtons from './headerComponents/HeaderButtons.js';


function HomeHeader() {
  const [title, onChangeTitle] = useState('')

  return (
    <View style={styles.container}>
      <Header
        leftComponent={MenuIcon}
        rightComponent={HeaderButtons}
        containerStyle={styles.header}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder='Title'
        placeholderTextColor='#696969'
      />
    </View>
    
  );  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    backgroundColor: '#000',
    height: 90,
    borderWidth: 0,
  },
  input: {
    position: 'relative',
    height: 50,
    color: 'white',
    backgroundColor: 'black',
    paddingLeft: 50,
    paddingTop: 8,
    paddingBottom: 5,
    fontSize: 35,
  },
});

export default HomeHeader;