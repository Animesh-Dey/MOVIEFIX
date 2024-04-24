import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useColor} from '../../Model/Color/useColor';

const Background = ({
  children,
  style,
}: {
  children: React.ReactElement;
  style: object;
}) => {
  const Colors = useColor();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: Colors.primary_001, ...style}}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Background;
