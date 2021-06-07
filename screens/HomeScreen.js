import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#000',
    },
});

export default HomeScreen;