import {View, SafeAreaView} from 'react-native';
import React from 'react';

const Background = ({
  children,
  style,
}: {
  children?: string | JSX.Element | JSX.Element[] | JSX.Element;
  style: object;
}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, ...style}}>{children}</View>
    </SafeAreaView>
  );
};

export default Background;
