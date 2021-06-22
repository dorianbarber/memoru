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
    flex: 1,
    elevation: 2,
    width: '100%',
    height: '20%',
  },
  itemId: {
    fontSize: 20,
    borderBottomWidth: 1,
  }
});

export default ItemCard;
