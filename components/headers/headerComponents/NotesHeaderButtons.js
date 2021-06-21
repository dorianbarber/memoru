import React from 'react';
import { StyleSheet, View } from 'react-native';

import ShareButton from '../../buttons/ShareButton.js';
import SubmitButton from '../../buttons/SubmitButton.js';
import { postNewNotes } from '../../../firebase/posts';


function NotesHeaderButtons({title, text}) {
    return (
        <View style={styles.rightSideItems}>
            <ShareButton message='these notes are DOPE'/>
            <SubmitButton onSubmit={() => postNewNotes(
                                            'userTest' /*User*/, 
                                            title ? title : `${Date.now()}`, //If title is empty, title becomes today's date
                                            text)
                                    }/>
        </View>
    )
}

const styles = StyleSheet.create({
  rightSideItems:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 100,
  },
});


export default NotesHeaderButtons
