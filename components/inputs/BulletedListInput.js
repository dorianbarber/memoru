import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, Button } from 'react-native';

function findFirstDiff(a, b) {
  var i = 0;
  if (a === b) return -1;
  while (a[i] === b[i]) i++;
  return i;
}

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

// function BulletedListInput({ placeholder }) {
//   const [text, setText] = useState('')

//   const onChangeText = (newValue) => {
//     const newCharIndex = findFirstDiff(text, newValue);
//     if (newValue[newCharIndex] === '\n') {
//       const correctValue = newValue.slice(0, newCharIndex + 1) + '\u2022 ' + newValue.slice(newCharIndex + 1);
//       setText(correctValue);
//     } else {
//       setText(newValue);
//     }
//   };

//   const onEmptyFocus = () => {
//     if (text === '') {
//       setText('\u2022 ');
//     }
//   };

//   const handleEnterKey = (e) => {
//     if (e.nativeEvent.key === 'Enter') {
//       const newText = text.concat('\u2022 ');
//       setText(newText);
//     }
//   }

//   return (
//     <TextInput
//       onFocus={onEmptyFocus}
//       onKeyPress={handleEnterKey}
//       onChangeText={onChangeText}
//       value={text}
//       multiline={true}
//       placeholder={placeholder}
//     />
//   );
// }

export default BulletedListInput;