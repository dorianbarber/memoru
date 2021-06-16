import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import NewItemHeader from '../components/headers/NewItemHeader.js';

function NewItemScreen({ title='Anime', template=[{form: 'text', index: 0, label: 'Title'}] }) {
  const [items, setItems] = useState(template);

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