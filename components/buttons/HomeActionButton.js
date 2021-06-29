import React from 'react';
import { StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeActionButton({ navigation }) {
  return (
    <ActionButton buttonColor='black'>
      <ActionButton.Item 
        buttonColor='#1B1B1B'
        title='New Template'
        onPress={() => navigation.navigate('TemplateScreen')}
      >
        <MaterialCommunityIcons name='database-plus' size={20} color ='white' />
      </ActionButton.Item>
      <ActionButton.Item 
        buttonColor='#141414' 
        title='Classic Notes'
        onPress={() => navigation.navigate('NotesScreen')}
      >
        <MaterialCommunityIcons name='pencil' size={20} color ='white'/>
      </ActionButton.Item>
      <ActionButton.Item 
        buttonColor='#141414' 
        title='New Item Page TESTING'
        onPress={() => navigation.navigate('NewItemScreen')}
      >
        <MaterialCommunityIcons name='plus' size={20} color ='white'/>
      </ActionButton.Item>
    </ActionButton>
  );
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 20,
    color: 'white',
  },
});

export default HomeActionButton;