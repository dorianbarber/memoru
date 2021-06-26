import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ItemCard({ itemId, data }) {
  
  const dataPreview = (data) => {
    const previewData = data.length < 3 ? data : data.slice(1);
    console.log(previewData);
    return <View>
      {
        previewData.map((item) => 
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.previewText}>{item.label}</Text>
            {
              item.form !== 'fraction' 
              ? <Text style={styles.previewText}>{item.data}</Text>
              : <Text style={styles.previewText}>{item.data.num + ' / ' + item.data.denom}</Text>
            }
          </View>
        )
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
    backgroundColor: '#272727',
    margin: 10,
    borderRadius: 20,
    elevation: 2,
  },
  itemId: {
    fontSize: 20,
    paddingBottom: 5,
    color: '#c4c4c4',
  },
  previewText: {
    color: '#696969',
    fontSize: 15,
  },
});

export default ItemCard;
