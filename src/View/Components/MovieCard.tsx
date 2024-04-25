import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {Image_URL} from '../../Utils/constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import BackDrop from './BackDrop';
import {Fonts} from '../../Utils/Fonts';
import {useColor} from '../../Model/Color/useColor';
import {StringFormatter} from '../../Utils/StringFormatter';
import {MovieCardType} from '../../Model/Types/types';

const MovieCard = ({popularity, image, title}: MovieCardType) => {
  const Colors = useColor();
  return (
    <ImageBackground
      source={{uri: `${Image_URL}${image}`}}
      style={{height: wp(60), width: wp(44)}}>
      <BackDrop />
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

export default MovieCard;
