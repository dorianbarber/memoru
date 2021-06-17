import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';

import MenuIcon from './headerComponents/MenuIcon.js';
import HeaderText from './headerComponents/HeaderText.js';
import HeaderButtons from './headerComponents/HeaderButtons.js';


function HomeHeader() {
  // alternatively do not use state and pass 'Memoru' to HeaderText
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle('Memoru')
    return () => {
      setTitle('')
    }
  }, [])

  return (
    <View style={{ height: 140 }}>
      <Header
        placement='left'
        leftComponent={<MenuIcon />}
        centerComponent={<HeaderText title={title} setTitle={setTitle}/>}
        rightComponent={<HeaderButtons/>}
        containerStyle={styles.header}
        leftContainerStyle={{ alignItems: 'center' }}
      />
    </View>
  );  
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomeHeader;
