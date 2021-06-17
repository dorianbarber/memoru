import React, { useState } from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function DateInput({ onChange }) {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateSelect = (_, newDate) => {
    onChange(newDate);
    const currentDate = newDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  console.log(date);

  return (
    <View>
      <TouchableNativeFeedback onPress={setShowPicker}>
        <Text style={{ fontSize: 17 }}>
          {(date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()}
        </Text>
      </TouchableNativeFeedback>
      {showPicker &&
        (<DateTimePicker
          testID='datePicker'
          value={date}
          onChange={handleDateSelect}
          display='default'
        />)
      }
    </View>
  );
}

export default DateInput;