import React from 'react';
import { Share, TouchableNativeFeedback } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const ShareButton = (props) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: props.message,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <TouchableNativeFeedback onPress={onShare}>
      <EntypoIcon name='share' size={20} color='white'/>
    </TouchableNativeFeedback>
  );
};

export default ShareButton;