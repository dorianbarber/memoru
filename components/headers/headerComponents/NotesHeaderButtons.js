import React from 'react';
import { StyleSheet, View } from 'react-native';

import ShareButton from '../../buttons/ShareButton.js';


function NotesHeaderButtons() {
    return (
        <View>
            <ShareButton message='these notes are DOPE'/>
        </View>
    )
}

export default NotesHeaderButtons
