import React from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';

function TemplateCard({ navigation, templateId }) {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback 
        onPress={() => navigation.navigate('DatabaseDisplay', { title: templateId })}
      >
        <Text style={styles.templateTitle}>
          { templateId }
        </Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#c4c4c4',
    elevation: 2,
  },
  templateTitle: {
    fontSize: 20,
    color: '#000',
  },
});

export default TemplateCard;