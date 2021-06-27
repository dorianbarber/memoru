import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function buildPreviewSwitch(data) {
  switch(data.form) {
    case 'fraction': 
      return <Text style={styles.previewText}>{data.data.num + ' / ' + data.data.denom}</Text>;
    case 'date':
      const date = new Date(data.data);
      return <Text style={styles.previewText}>{(date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()}</Text>;
    default:
      return <Text style={styles.previewText}>{data.data}</Text>;
  }
}

const buildPreview = (data) => {
  if (!data.data) {
    return null;
  }
  return (
    <View style={styles.previewField}>
      <Text style={styles.previewText}>{data.label}</Text>
      {
        buildPreviewSwitch(data)
      }
    </View>
  )
}

function ItemCard({ itemId, data }) {
  
  const dataPreview = (data) => {
    const previewData = data.length < 3 ? data : data.slice(1);
    console.log(previewData);
    return <View>
      {
        previewData.map((item) => buildPreview(item))
      }
    </View>;
  };

  console.log(data);
  return (
    <View style={styles.container}>
      <Text style={styles.itemId}>{itemId}</Text>
      { dataPreview(data.fields) }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    // backgroundColor: '#272727',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#c4c4c4',
    elevation: 2,
  },
  itemId: {
    fontSize: 20,
    paddingBottom: 5,
    // color: '#c4c4c4',
    color: '#000',
  },
  previewText: {
    color: '#696969',
    // color: '#000',
    fontSize: 15,
  },
  previewField: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
});

export default ItemCard;
