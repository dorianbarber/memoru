import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';

import OptionsButton from '../../buttons/OptionsButton.js';
import SearchButton from '../../buttons/SearchButton.js';
import ShareButton from '../../buttons/ShareButton.js';

function HeaderButtons({optionsActive, setOptionsActive}) {
  const [homeHeaderBtnsActive, setHomeHeaderBtnsActive] = useState(false)

  useEffect(() => {
    setHomeHeaderBtnsActive(true)
    return () => {
      setHomeHeaderBtnsActive(false)
    }
  }, [])

  return (
    <View style={styles.rightSideItems}>
      <ShareButton message='memoru is dope'/>
      <SearchButton />
      <OptionsButton 
      optionsActive={optionsActive} 
      setOptionsActive={setOptionsActive}
      homeHeaderBtnsActive={homeHeaderBtnsActive}/>
    </View>
  );
}


const styles = StyleSheet.create({
  rightSideItems:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 120,
  },
});

export default HeaderButtons;