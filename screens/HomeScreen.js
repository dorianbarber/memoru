import React, {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import HomeHeader from '../components/headers/HomeHeader.js';
import HomeActionButton from '../components/buttons/HomeActionButton.js';
import TemplateList from '../components/home/TemplateList.js';
import { getAllTemplates } from '../firebase/gets';

function HomeScreen({ navigation }) {
  const [optionsActive, setOptionsActive] = useState(false)
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    async function fetchTemplates() {
      const response = await getAllTemplates('userTest');
      let freshData = [];
      response.forEach(doc => {
        freshData.push(doc.id);
      });
      setTemplates(freshData);
    };
    fetchTemplates();
  });

  return (
    <View style={styles.container}>
      <HomeHeader
        optionsActive={optionsActive}
        setOptionsActive={setOptionsActive}
        />
      <TemplateList 
        navigation={navigation}
        templateTitles={templates} 
      />
      <StatusBar
        style='light' 
        backgroundColor='#000'/>
      <HomeActionButton navigation={navigation}/>
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

export default HomeScreen;