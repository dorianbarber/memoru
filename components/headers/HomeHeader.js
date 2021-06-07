import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

function HomeHeader() {
    return (
        <Header
            leftComponent={{ text: 'Notes', style:styles.title }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={styles.header}        
        />
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 20,
    },
    header: {
        backgroundColor: '#000',
    }
})

export default HomeHeader;