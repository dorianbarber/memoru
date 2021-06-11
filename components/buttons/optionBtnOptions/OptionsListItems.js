import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

function OptionsListItems({item, onOptionPress}) {
    return (
            <View style={styles.item}>
                <TouchableNativeFeedback 
                onPress={e => onOptionPress(e)}
                background={TouchableNativeFeedback.Ripple('#696969', true)}
                > 
                    <Text style={styles.optionName}>
                            {item.option}
                    </Text>
                </TouchableNativeFeedback>
            </View>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 15,
        backgroundColor: '#323232',
        borderBottomColor: 'black',
        borderBottomWidth: 2
,
    },
    optionName: {
        color: 'white',
        fontSize: 13,
    }
});

export default OptionsListItems
