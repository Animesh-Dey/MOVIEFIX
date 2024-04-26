import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useColor} from '../../Model/Color/useColor';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Fonts} from '../../Utils/Fonts';
import {buttonComponentType} from '../../Model/Types/types';

const Button = ({item, movieModel, filterHandler}: buttonComponentType) => {
  const Colors = useColor();
  return (
    <TouchableOpacity
      disabled={item.id === movieModel.getSelectedGenreId() ? true : false}
      onPress={() => filterHandler(item.id)}
      style={{
        backgroundColor:
          item.id === movieModel.getSelectedGenreId()
            ? Colors.secondary_001
            : Colors.secondary_004,
        paddingHorizontal: wp(3),
        paddingVertical: wp(1.5),
        borderRadius: 4,
      }}>
      <Text
        style={{
          color: Colors.secondary_002,
          fontSize: hp(1.8),
          fontFamily: Fonts.Saira_Regular,
        }}>
        {item?.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
