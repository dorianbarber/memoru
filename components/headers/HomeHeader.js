import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

import MenuIcon from './headerComponents/MenuIcon';

import HeaderText from './headerComponents/HeaderText.js';
import HeaderButtons from './headerComponents/HeaderButtons.js';


function HomeHeader() {
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle('Memoru')
    return () => {
      setTitle('')
    }
  }, [])

  return (
    <Header
      leftComponent={MenuIcon}
      centerComponent={<HeaderText title={title} setTitle={setTitle}/>}
      rightComponent={HeaderButtons}
      containerStyle={styles.header}
    />
  );  
}


const styles = StyleSheet.create({
  //Entire header
  header: {
    position: 'absolute',
    backgroundColor: '#000',
    height: 140,
  },
});

export default HomeHeader;