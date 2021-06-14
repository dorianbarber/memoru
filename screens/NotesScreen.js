import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import NotesHeader from '../components/headers/NotesHeader';
import Notes from '../components/notes/notes';

import React from 'react'



////////////  When you click on notes and type anything, the notes automatically saves as a file. Though if it's empty, then it does not save  //////////////////////

function NotesScreen() {
    return (
        <View style={styles.container}>
            <NotesHeader />
            <Notes />
            <StatusBar
                style='light' 
                backgroundColor='#000'
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
});

export default NotesScreen
