import React, { useState } from 'react';
import { Button, FlatList, ScrollView } from 'react-native';
import LabelFormPair from './LabelFormPair.js';

function Template() {
  const [templateList, setTemplateList] = useState([{}]);
  const [childId, setChildId] = useState(1);

  const renderItem = ({id, label, form}) => (
    <LabelFormPair id={id} label={label} form={form}/>
  );

  const buttonAction = () => {
    const newId = childId;
    setChildId(newId + 1);
    const newTemplateList = templateList.concat({
      id: newId,
      label: '',
      form: 'Text',
    });
    setTemplateList(newTemplateList);
  };

  return (
    <ScrollView>
      <FlatList
        data={templateList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        title='PRESS ME B**'
        onPress={buttonAction}
      />
    </ScrollView>
  );
}

export default Template;