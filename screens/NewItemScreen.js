import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import NewItemHeader from '../components/headers/NewItemHeader.js';

function NewItemScreen({ title='Anime', template}) {
  // const [templateList, setTemplateList] = useState(null);

  return (
    <View style={styles.container}>
      <NewItemHeader title={title}/>
      <StatusBar
        style='light' 
        backgroundColor='#000'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default NewItemScreen;