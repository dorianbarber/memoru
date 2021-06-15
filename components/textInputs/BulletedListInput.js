import React, { useState } from 'react';
import { TextInput } from 'react-native';

function findFirstDiff(a, b) {
  var i = 0;
  if (a === b) return -1;
  while (a[i] === b[i]) i++;
  return i;
}

function BulletedListInput({ placeholder }) {
  const [text, setText] = useState('')

  const onChangeText = (newValue) => {
    const newCharIndex = findFirstDiff(text, newValue);
    if (newValue[newCharIndex] === '\n') {
      const correctValue = newValue.slice(0, newCharIndex + 1) + '\u2022 ' + newValue.slice(newCharIndex + 1);
      setText(correctValue);
    } else {
      setText(newValue);
    }
  };

  const onEmptyFocus = () => {
    if (text === '') {
      setText('\u2022 ');
    }
  };

  const handleEnterKey = (e) => {
    if (e.nativeEvent.key === 'Enter') {
      const newText = text.concat('\u2022 ');
      setText(newText);
    }
  }

  return (
    <TextInput
      onFocus={onEmptyFocus}
      onKeyPress={handleEnterKey}
      onChangeText={onChangeText}
      value={text}
      multiline={true}
      placeholder={placeholder}
    />
  );
}

export default BulletedListInput;