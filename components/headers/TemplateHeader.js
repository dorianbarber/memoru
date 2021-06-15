import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

import MenuIcon from './headerComponents/MenuIcon.js';
import TemplateHeaderButtons from './headerComponents/TemplateHeaderButtons.js';


function HomeHeader() {
  const [title, onChangeTitle] = useState('');

  return (
    <View style={styles.container}>
      <Header
        leftComponent={MenuIcon}
        rightComponent={<TemplateHeaderButtons onSubmit={console.log('submit button')}/>}
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
    height: 140,
  },
  header: {
    position: 'relative',
    backgroundColor: '#000',
    height: 90,
  },
  input: {
    position: 'relative',
    color: 'white',
    backgroundColor: 'black',
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 30,
  },
});

export default HomeHeader;