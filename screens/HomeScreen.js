import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import HomeHeader from '../components/headers/HomeHeader.js';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <HomeHeader/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        paddingTop: 30,
    },
});

export default HomeScreen;