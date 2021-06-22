import React from 'react'
import {SafeAreaView, View, StyleSheet, Text } from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler'

function OptionsListHome({setOptionsActive, onOptionPress}) {
    return (
        <SafeAreaView style={styles.optionsListContainer}>
            
            <TouchableNativeFeedback
            onPress={() => onOptionPress('edit-key')}
            background={TouchableNativeFeedback.Ripple('#696969', true)}
            > 
                <View style={styles.item} id='edit-key'>
                        <Text style={styles.optionName} >Edit template</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
            onPress={() => onOptionPress('view-type-key')}
            background={TouchableNativeFeedback.Ripple('#696969', true)}
            > 
                <View style={styles.item}>
                    <Text style={styles.optionName} id='view-type-key'>View</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
            onPress={() => onOptionPress('pin-favorites-to-top-key')}
            background={TouchableNativeFeedback.Ripple('#696969', true)}
            > 
                <View style={styles.item}>
                    <Text style={styles.optionName} id='pin-favorites-to-top-key'>Pin favorites to top</Text>
                </View>
            </TouchableNativeFeedback>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    optionsListContainer:{
        position: 'absolute',
        width: 150,
        height: 'auto',

        color: '#000',
        right: 0,
        top: 1,
        borderRadius:10,
        borderWidth: 3,
        borderColor: '#323232',
        flex: 1,
        elevation: 20,
    },
    item:{
        padding: 15,
        backgroundColor: '#323232',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    optionName: {
        color: 'white',
        fontSize: 13,
    }

});

export default OptionsListHome
