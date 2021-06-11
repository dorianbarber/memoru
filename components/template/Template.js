import React, { useState } from 'react';
import { View, Button, FlatList, ScrollView, StyleSheet, TouchableNativeFeedback } from 'react-native';
import LabelFormPair from './LabelFormPair.js';

import EntypoIcon from 'react-native-vector-icons/Entypo';

function Template() {
  const [templateList, setTemplateList] = useState([{}]);
  const [childId, setChildId] = useState(1);

  const renderItem = ({item, index, _}) => (
    <LabelFormPair key={index} label={item.label} form={item.form}/>
  );

  const addField = () => {
    const newId = childId;
    setChildId(newId + 1);
    const newTemplateList = templateList.concat({
      id: newId.toString(),
      label: '',
      form: 'Text',
    });
    setTemplateList(newTemplateList);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={templateList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{flexGrow: 1}}
        ListFooterComponent={
          <View style={styles.addButton}>
            <TouchableNativeFeedback
              onPress={addField}
              background={TouchableNativeFeedback.Ripple('#696969', true)}
            >
              <View>
                <EntypoIcon name='plus' size={40}/>
              </View>
            </TouchableNativeFeedback>
          </View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  addButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15,
    marginBottom: 30,
  },
});

export default Template;