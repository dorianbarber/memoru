import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';

import ItemCard from './ItemCard.js';

function DatabaseItems({ data }) {

  const renderItem = ({item}) => {
    console.log(item);

    return <ItemCard
      itemId={item.id}
      data={item.data}
    />;
  }

  return (
    <View style={styles.container}>
      {
        data 
        ? <FlatList
            data={data}
            renderItem={renderItem}
          />
        : <Text>{'No data'}</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 20,
  },
});

export default DatabaseItems;