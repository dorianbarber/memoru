import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function HeaderText({title}) {
  return (
    <View style={styles.leftHeader}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  leftHeader: {
    right: 50,
    width: 150,
  },
  title: {
    color: '#fff',
    fontSize: 35,
  },
});

export default HeaderText;