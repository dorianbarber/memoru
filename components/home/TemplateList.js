import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import TemplateCard from './TemplateCard';

function TemplateList({ navigation, templateTitles }) {

  const renderItem = ({ item }) => {
    return (
      <TemplateCard 
        navigation={navigation}
        templateId={item} 
      />
    ); 
  }

  return (
    <View style={styles.container}>
      { 
        templateTitles.length > 0 &&
        <FlatList
          data={templateTitles}
          renderItem={renderItem}
        /> 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TemplateList;

