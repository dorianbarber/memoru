import React, { useRef, useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';

// each line is a view pair 
// each view pair has 1 Text and 1 Text input
// the Text is a bullet unicode character
// in the text input, on enter press a new entry is added
function BulletedListInput() {
  const [text, setText] = useState(['']); 
  const [focusIndex, setFocusIndex] = useState(0);
  const flatList = useRef(null);

  const handleEnterKey = (e, index) => {
    var newText = [...text];
    newText.splice(index+1, 0, '');
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
    return <View style={styles.pair}>
      <Text style={styles.bullet}>{'\u2022'}</Text>
      <TextInput
        autoFocus={index === focusIndex}
        style={styles.textInput}
        value={'' + item}
        onChangeText={(newTextValue) => updateText(newTextValue, index)}
        onSubmitEditing={(nativeEvent) => handleEnterKey(nativeEvent, index)}
        onKeyPress={(e) => handleKey(e, index)}
        placeholder='Option'
      />
    </View>
  };

  return (
    <View style={styles.container}>
      <FlatList 
        ref={flatList}
        onContentSizeChange={() => flatList.current.scrollToEnd()}
        extraData={focusIndex}
        data={text}
        renderItem={renderItem}
      />
    </View>
      
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 20,
    // position: 'absolute',
    // bottom: 0,
  },
  pair: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
  },
  bullet: {
    paddingRight: 5,
    fontSize: 20,
  },
  textInput: {
    fontSize: 17,
    width: '80%',
  }
});

export default BulletedListInput;