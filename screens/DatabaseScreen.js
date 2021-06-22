import React, {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import DatabaseHeader from '../components/headers/DatabaseHeader.js';

import { getAllItems } from '../firebase/gets';

function DatabaseScreen({ title='Anime' }) {
  const [optionsActive, setOptionsActive] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await getAllItems('userTest', title);
      setData(response);
    };

    fetchData();
  }, [title]);

  return (
    <View style={styles.container}>
      <DatabaseHeader
        title={title}
        optionsActive={optionsActive}
        setOptionsActive={setOptionsActive}
        />
      <StatusBar
        style='light' 
        backgroundColor='#000'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 30,
  },
});

export default DatabaseScreen;