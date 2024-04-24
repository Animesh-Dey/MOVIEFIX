import {Image} from 'react-native';
import React from 'react';
import Background from '../Components/Background';
import {images} from '../../Utils/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Splash = () => {
  return (
    <Background style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={images.Icon}
        style={{height: wp(75), width: wp(75)}}
        resizeMode="contain"
      />
    </Background>
  );
};

export default Splash;
