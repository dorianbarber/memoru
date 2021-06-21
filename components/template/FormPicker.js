import React, { useState } from 'react';
import { Picker, StyleSheet, View, Modal, Text } from 'react-native';
import BulletedListInput from '../inputs/BulletedListInput.js';

function FormPicker({ form, onChange }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [metadata, setMetadata] = useState();

  const handleOnValueChange = (itemValue, _) => {
    if (itemValue === 'picker') {
      setModalVisible(true);
    }
    onChange(itemValue);
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        visible={modalVisible}
        transparent={true}
      >
        <View style={styles.modalWrapView}>
          <View style={styles.modalView}>
            <Text style={{fontSize: 20, paddingBottom: 5}}>{'Enter values:'}</Text>
            <BulletedListInput />
          </View>
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
  modalWrapView: {
    flex: 1,
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 2,
    height: 500, //this is bad but percentages dont work as intended
  }
});

export default FormPicker;