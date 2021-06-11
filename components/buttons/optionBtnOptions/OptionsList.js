import React, {useState} from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import OptionsListItems from './OptionsListItems'
// import {ListItems} from 'react-native-elements'


const listItems = [
    {
        option: 'Attach files',
        id: 'attach-files-key'
    },
    {
        option: 'Save as file',
        id: 'save-as-file-key'
    },
    {
        option: 'Delete',
        id: 'delete-key'   
    },
    {
        option: 'Add to favorites',
        id: 'add-to-favorites-key'   
    },
    {
        option: 'Print',
        id: 'print-key'   
    },
]




function OptionsList({setOptionsActive}) {
    const [selectedId, setSelectedId] = useState(null)

    const onOptionPress = (e) => {
        setOptionsActive(false)
        setSelectedId(e.target.id)
    }


    return (
        <SafeAreaView style={styles.optionsListContainer}>
            <FlatList
                data={listItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => ( <OptionsListItems onOptionPress={onOptionPress} item={item}/>)}
            />
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
        borderRadius:10,
        borderWidth: 3,
        borderColor: '#323232',
        zIndex: 1,
    },
});

export default OptionsList
