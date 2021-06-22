import React from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import {TouchableNativeFeedback } from 'react-native-gesture-handler'

function OptionsList({setOptionsActive, onOptionPress}) {

    return (
        <SafeAreaView style={styles.optionsListContainer}>
            <TouchableNativeFeedback
            onPress={() => onOptionPress('attach-files-key')}
            background={TouchableNativeFeedback.Ripple('#696969', true)}
            > 
            <View style={styles.item} id='attach-files-key'>
                    <Text style={styles.optionName} >Attach files</Text>
            </View>
            </TouchableNativeFeedback>
            
            <TouchableNativeFeedback
            onPress={() => onOptionPress('save-as-file-key')}
            background={TouchableNativeFeedback.Ripple('#696969', true)}
            > 
            <View style={styles.item} id='save-as-file-key'>
                <Text style={styles.optionName} id='save-as-file-key'>Save as file</Text>
            </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
            onPress={() => onOptionPress('delete-notes-key')}
            background={TouchableNativeFeedback.Ripple('#696969', true)}
            > 
                <View style={styles.item}>
                    <Text style={styles.optionName} id='delete-key'>Delete</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
            onPress={() => onOptionPress('add-to-favorites-key')}
            background={TouchableNativeFeedback.Ripple('#696969', true)}
            > 
                <View style={styles.item}>
                    <Text style={styles.optionName} id='add-to-favorites-key'>Add to favorites</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
            onPress={() => onOptionPress('print-key')}
            background={TouchableNativeFeedback.Ripple('#696969', true)}
            > 
                <View style={styles.item}>
                    <Text style={styles.optionName} id='print-key'>Print</Text>
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

        zIndex: 100,
        elevation: 100,

    },
    item:{
        padding: 15,
        backgroundColor: '#323232',
        borderBottomColor: 'black',
        borderBottomWidth: 2,

        zIndex: 100,
        elevation: 100,
    },
    optionName: {
        color: 'white',
        fontSize: 13,

        zIndex: 100,
        elevation: 100,
        
    }

});

export default OptionsList
