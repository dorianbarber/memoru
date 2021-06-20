import React, { useState } from 'react';
import { Picker, StyleSheet, View, Modal, Text } from 'react-native';

function FormPicker({ form, onChange }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [metadata, setMetadata] = useState();

  const handleOnValueChange = (itemValue, _) => {
    if (itemValue === 'fraction') {
      setModalVisible(true);
    }
    onChange(itemValue);
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        visible={modalVisible}
      >
        <View style={styles.modalView}>
          <Text>
            {'hello world'}
          </Text>
        </View>
      </Modal>
      <Picker
        style={styles.picker}
        selectedValue={form}
        onValueChange={handleOnValueChange}
        mode='dropdown'
      >
        <Picker.Item label='Text' value='text'/>
        <Picker.Item label='Number' value='number'/>
        <Picker.Item label='Fraction' value='fraction'/>
        <Picker.Item label='Date' value='date'/>
        <Picker.Item label='Picker' value='picker'/>
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picker: {
    flex: 1,
  },
  colour: {
    color: '#fff',
    backgroundColor: '#000',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FormPicker;