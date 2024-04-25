import {View} from 'react-native';
import React from 'react';
import {useColor} from '../../Model/Color/useColor';

const BackDrop = () => {
  const Colors = useColor();
  return (
    <View
      style={{
        backgroundColor: Colors.primary_001,
        flex: 1,
        opacity: 0.3,
      }}
    />
  );
};

export default BackDrop;
