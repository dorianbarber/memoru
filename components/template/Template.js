import React, { useRef, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableNativeFeedback } from 'react-native';
import LabelFormPair from './LabelFormPair.js';

import EntypoIcon from 'react-native-vector-icons/Entypo';

const baseLabel = '';
const baseForm = 'text';
const baseItem = () => (
  { 
    index: 0, 
    label: baseLabel, 
    form: baseForm 
  }
);

function Template() {
  const [templateList, setTemplateList] = useState([baseItem()]);

  const flatList = useRef(null);

  const updateField = (index, label, form) => {
    var newTemplateList = JSON.parse(JSON.stringify(templateList));
    newTemplateList[index] = { index: index, label: label, form: form };
    setTemplateList(newTemplateList);
  };

  const deleteItemByIndex = (index) => {
    if (index === 0 && templateList.length === 1) {
      setTemplateList([baseItem()]);
      return;
    }
    var newTemplateList = JSON.parse(JSON.stringify(templateList));
    newTemplateList.splice(index, 1);
    newTemplateList.map((item, index) => {
      item.index = index; 
      return item;
    });
    setTemplateList(newTemplateList);
  };
 
  const renderItem = ({item, x, y}) => (
    <LabelFormPair 
      index={item.index} 
      label={item.label} 
      form={item.form} 
      onChange={updateField}
      onDelete={() => deleteItemByIndex(item.index)}
    />
  );

  const addField = () => {
    const newIndex = templateList[templateList.length - 1]["index"] + 1;
    const newTemplateList = templateList.concat({
      index: newIndex,
      label: baseLabel,
      form: baseForm,
    });
    setTemplateList(newTemplateList);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={templateList}
        renderItem={renderItem}
        ref={flatList}
        keyExtractor={(item, _) => item.index.toString()}
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