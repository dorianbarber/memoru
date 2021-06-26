import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ItemCard({ itemId, data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.itemId}>{itemId}</Text>
      <Text>{'...'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: '#272727',
    margin: 10,
    borderRadius: 20,
    elevation: 2,
  },
  itemId: {
    fontSize: 20,
    paddingBottom: 5,
    color: '#c4c4c4',
  }
});

export default ItemCard;
