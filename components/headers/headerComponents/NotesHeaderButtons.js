import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';

import ShareButton from '../../buttons/ShareButton.js';
import SubmitButton from '../../buttons/SubmitButton.js';
import OptionsButton from '../../buttons/OptionsButton.js';
import { postNewNotes } from '../../../firebase/posts';


function NotesHeaderButtons({title, text, optionsActive, setOptionsActive}) {
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
                <OptionsButton 
                optionsActive={optionsActive} 
                setOptionsActive={setOptionsActive}
                notesHeaderBtnsActive={notesHeaderBtnsActive}/>
            </View>
            <View style={styles.submitBtn}>
              <SubmitButton onSubmit={() => postNewNotes(
                                            'userTest' /*User*/, 
                                            title ? title : 'TBD', //If title is empty, title becomes today's date
                                            text)
                                    }/>
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
    zIndex: 100,
    elevation: 100,
  },
  optionsBtns: {
    marginLeft: 3,
  },
  submitBtn:{
    justifyContent:'flex-end'
  }
});

export default NotesHeaderButtons
