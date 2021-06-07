import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Home Screen Baby</Text>
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