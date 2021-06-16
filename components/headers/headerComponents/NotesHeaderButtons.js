import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';

import ShareButton from '../../buttons/ShareButton.js';
import OptionsButton from '../../buttons/OptionsButton.js';
import SubmitButton from '../../buttons/SubmitButton.js';


function NotesHeaderButtons() {
    const [notesHeaderBtnsActive, setNotesHeaderBtnsActive] = useState(false)

    useEffect(() => {
        setNotesHeaderBtnsActive(true)
        return() => {
            setNotesHeaderBtnsActive(false)
        }
    }, [])

    return (
        <View style={styles.rightSideItems}>
            <ShareButton message='these notes are DOPE'/>
            <View style={styles.optionsBtns}>    
                <OptionsButton notesHeaderBtnsActive={notesHeaderBtnsActive}/>
            </View>
            <View style={styles.submitBtn}>
                <SubmitButton />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  rightSideItems:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: '#fff',
    width: 120,
  },
  optionsBtns: {
    marginLeft: 3,
    top: 5,
  },
  submitBtn:{
    justifyContent:'flex-end'
  }
});

export default NotesHeaderButtons
