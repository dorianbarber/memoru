import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Header } from 'react-native-elements';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontistoIcon from 'react-native-vector-icons/Fontisto'

function HomeHeader() {
  return (
    <Header
      // leftComponent={{ text: 'Memoru', style: styles.title }}
      // rightComponent={{ icon: 'settings', color: '#fff' }}
      containerStyle={styles.header}
    >
      
      <View style={styles.menu}>
        <SimpleLineIcon name='menu' size={30} color='white' />
      </View>

      <View style={styles.leftHeader}>
        <Text style={styles.title}>
          Memoru
        </Text>
      </View>

      <View style={styles.rightSideItems}>
        <FontistoIcon name='search' size={20} color='white' />
        <EntypoIcon name='share' size={20} color='white' />
        <EntypoIcon name='dots-three-vertical' size={20} color='white' />
      </View>

    </Header>
  );  
}

const styles = StyleSheet.create({
  //Entire header
  header: {
    position: 'absolute',
    backgroundColor: '#000',
    height: 140,
  },

  //Menu icon
  menu: {
    margin: 0,
    padding: 0,
    top: 10,
  },

  //Menu title
  leftHeader: {
    right: 50,
    width: 150,
  },
  title: {
    color: '#fff',
    fontSize: 35,
  },

  //Menu items on the right side of header
  rightSideItems:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    color: '#fff',
    top: 15,
    width: 100,
  }
});

export default HomeHeader;