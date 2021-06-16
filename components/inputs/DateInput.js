import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function DateInput({ onChange }) {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateSelect = (newDate) => {
    onChange(newDate);
    setShowPicker(false);
    setDate(newDate);
  };

  return (
    <View>
      <Text onPress={setShowPicker(true)}>
        {date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()}
      </Text>
      {showPicker &&
        <DateTimePicker
          value={date}
          onChange={handleDateSelect}
          display='default'
        />
      }
    </View>
  );
}

export default DateInput;