import React from 'react';
import { StyleSheet, Text } from 'react-native';

function HeaderText({title}) {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 25,
  },
});

export default HeaderText;