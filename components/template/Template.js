import React, { useRef, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableNativeFeedback } from 'react-native';
import LabelFormPair from './LabelFormPair.js';

import EntypoIcon from 'react-native-vector-icons/Entypo';

function Template() {
  const [templateList, setTemplateList] = useState([{}]);
  const [childId, setChildId] = useState(1);

  const flatList = useRef(null);

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
        ref = {flatList}
        onContentSizeChange={() => flatList.current.scrollToEnd()}
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
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButton: { 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15,
    marginBottom: 10,
  },
});

export default Template;