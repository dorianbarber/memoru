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
  },
  itemId: {
    fontSize: 20,
    borderBottomWidth: 1,
    paddingBottom: 5,
  }
});

export default ItemCard;
