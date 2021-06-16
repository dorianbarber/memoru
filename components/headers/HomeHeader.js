import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
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
    <Header
      placement='left'
      leftComponent={MenuIcon}
      centerComponent={<HeaderText title={title} setTitle={setTitle}/>}
      rightComponent={<HeaderButtons />}
      containerStyle={styles.header}
    />
  );  
}


const styles = StyleSheet.create({
  //Entire header
  header: {
    position: 'relative', //was absolute
    display: 'flex',
    backgroundColor: '#000',
    alignItems: 'baseline',
    // height: 140,
  },
});

export default HomeHeader;