import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import FieldInput from './FieldInput.js';

function NewItemForm({ data, onChange }) {

  const updateField = (index, newData) => {
    var newFields = JSON.parse(JSON.stringify(data));
    newFields[index].data = newData;
    onChange(newFields);
  };

  const renderField = ({ item, index, separators }) => {
    console.log(item);
    return <View style={styles.pair}>
      <View style={{ width: '40%'}}>
        <Text style={styles.label}>{item.label}</Text>
      </View>
      <FieldInput form={item.form} data={item.data} onChange={updateField}/>
    </View>
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderField}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 20,
  },  
  pair: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    padding: 15,
  },
});

export default NewItemForm;