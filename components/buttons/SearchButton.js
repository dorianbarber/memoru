import React from 'react'
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native';

import FontistoIcon from 'react-native-vector-icons/Fontisto';

function SearchButton() {
    const onSearch = () => {

    }

    return (
        <TouchableNativeFeedback 
        onPress={onSearch}
        background={TouchableNativeFeedback.Ripple('#696969', true)}
        >
            <View style={styles.touchable}>
                <FontistoIcon name='search' size={20} color='white' />
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
  touchable: {
    alignContent: 'center',
    justifyContent: 'center',

  },
});

export default SearchButton
