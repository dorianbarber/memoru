import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

function OptionsList() {
  return (
    <View>
        <Text style={styles.text}>{'Options'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
});

export default OptionsList
