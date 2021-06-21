import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';

// each line is a view pair 
// each view pair has 1 Text and 1 Text input
// the Text is a bullet unicode character
// in the text input, on enter press a new entry is added
function BulletedListInput() {
  const [text, setText] = useState(['thing 1', 'thing 2']); 
  const [focusIndex, setFocusIndex] = useState(0);

  const handleEnterKey = (e, index) => {
    var newText = [...text];
    newText.splice(index+1, 0, ' ');
    setFocusIndex(index+1);
    setText(newText);
  };

  const handleKey = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' 
          && text[index] === ''
          && text.length > 1) {
      if (index > 0) {
        setFocusIndex(index - 1);
      }
      var newText = [...text];
      newText.splice(index, 1);
      setText(newText);
      
    }
  }

  const updateText = (newValue, index) => {
    if (newValue.slice(-1) === '\n') {
      return;
    } else {
      var newText = [...text];
      newText[index] = newValue;
      setText(newText);
    }
  };

  const renderItem = ({item, index, _}) => {
    // console.log('Index: ' + index);

    return <View style={styles.container}>
      <Text style={styles.bullet}>{'\u2022'}</Text>
      <TextInput
        autoFocus={index === focusIndex}
        style={styles.textInput}
        value={item}
        onChangeText={(newTextValue) => updateText(newTextValue, index)}
        onSubmitEditing={(nativeEvent) => handleEnterKey(nativeEvent, index)}
        onKeyPress={(e) => handleKey(e, index)}
      />
    </View>
  };

  // console.log(focusIndex);
  return (
    <View style={{flex: 1, borderWidth: 1, height: '60%'}}>
      <FlatList 
        extraData={focusIndex}
        data={text}
        renderItem={renderItem}
      />
    </View>
      
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    padding: 15,
    alignItems: 'center',
    width: '100%',
  },
  bullet: {
    paddingRight: 5,
    fontSize: 20,
  },
  textInput: {
    fontSize: 17,
    width: '80%',
    borderWidth: 1,
  }
});

export default BulletedListInput;