import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

import MenuIcon from './headerComponents/MenuIcon.js';
import TemplateHeaderButtons from './headerComponents/TemplateHeaderButtons.js';


function TemplateHeader({templateList, starredItem}) {
  const [title, onChangeTitle] = useState('');

  return (
    <View style={styles.container}>
      <Header
        leftComponent={<MenuIcon />}
        rightComponent={<TemplateHeaderButtons 
                          templateList={templateList} 
                          starredItem={starredItem}
                          title={title}
                      />}
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
    backgroundColor: '#000',
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

export default TemplateHeader;