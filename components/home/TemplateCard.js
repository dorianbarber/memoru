import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function TemplateCard({ templateId }) {
  return (
    <View style={styles.container}>
      <Text style={styles.templateTitle}>
        { templateId }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
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