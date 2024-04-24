import {Image} from 'react-native';
import React, {useEffect} from 'react';
import Background from '../Components/Background';
import {images} from '../../Utils/ImagePath';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScreenParamList, Screens} from '../../Adapter/Navigation/screenTypes';
import {useColor} from '../../Model/Color/useColor';

type Props = NativeStackScreenProps<ScreenParamList, Screens.Splash>;
const Splash = ({navigation}: Props): JSX.Element => {
  const Colors = useColor();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Screens.Home);
    }, 2000);
  }, []);
  return (
    <Background
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary_002,
      }}>
      <Image
        source={images.Icon}
        style={{height: wp(75), width: wp(75)}}
        resizeMode="contain"
      />
    </Background>
  );
};

export default Splash;
