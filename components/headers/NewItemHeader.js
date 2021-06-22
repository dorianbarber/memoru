import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-elements';

import NewItemHeaderButtons from './headerComponents/NewItemHeaderButtons.js';


function NewItemHeader({ title, data, starredItem }) {

  return (
    <View style={styles.container}>
      <Header
        centerComponent={<Text style={styles.title}>{title}</Text>}
        rightComponent={<NewItemHeaderButtons title={title} fields={data} starredItem={starredItem}/>}
        containerStyle={styles.header}
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
  title: {
    color: 'white',
    fontSize: 30,
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

export default NewItemHeader;