import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import NewItemHeader from '../components/headers/NewItemHeader.js';
import NewItemForm from '../components/items/NewItemForm.js';

function NewItemScreen({ title='Anime', template=[{form: 'text', index: 0, label: 'Title'}, {form: 'date', index: 1, label: 'Date watched'}, {form: 'fraction', index: 2, label: 'Episodes'}] }) {
  const [fields, setFields] = useState(template);

  return (
    <View style={styles.container}>
      <NewItemHeader title={title}/>
      <NewItemForm data={fields} onChange={setFields} />
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