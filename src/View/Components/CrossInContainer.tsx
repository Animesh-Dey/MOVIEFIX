import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useColor} from '../../Model/Color/useColor';
import {Fonts} from '../../Utils/Fonts';
import {images} from '../../Utils/ImagePath';
import {StringFormatter} from '../../Utils/StringFormatter';
import {CrossInContainerTypes} from '../../Model/Types/types';

const CrossInContainer = ({popularity, title}: CrossInContainerTypes) => {
  const Colors = useColor();
  return (
    <ImageBackground
      source={images.BlankImage}
      style={{
        height: wp(60),
        width: wp(44),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: wp(3.2),
          fontFamily: Fonts.Archivo_Regular,
          fontWeight: 600,
          color: Colors.secondary_003,
        }}>
        Image
      </Text>
      <View
        style={{
          position: 'absolute',
          bottom: wp(3),
          left: wp(3),
        }}>
        <Text
          style={{
            fontSize: wp(3.7),
            fontFamily: Fonts.Archivo_Regular,
            fontWeight: 600,
            color: Colors.secondary_003,
          }}>
          {StringFormatter(title)}
        </Text>
        <Text
          style={{
            fontSize: wp(3.2),
            fontFamily: Fonts.Archivo_Regular,
            fontWeight: 600,
            color: Colors.secondary_003,
          }}>
          {popularity.toFixed(2)}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default CrossInContainer;
