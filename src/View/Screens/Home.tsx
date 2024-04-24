import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScreenParamList, Screens} from '../../Adapter/Navigation/screenTypes';
import Background from '../Components/Background';
import {useColor} from '../../Model/Color/useColor';
import {images} from '../../Utils/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useMovieModel} from '../../Model/Profile/useMovieModel';
import {useMovieController} from '../../Controller/Profile/useMovieController';
import {FlatList} from 'react-native-gesture-handler';
import {Fonts} from '../../Utils/Fonts';
import {BlankSpace} from '../Components/BlankSpace';

type Props = NativeStackScreenProps<ScreenParamList, Screens.Home>;
const Home = ({navigation}: Props): JSX.Element => {
  const movieModel = useMovieModel();
  const movieController = useMovieController(movieModel);
  const Colors = useColor();

  useLayoutEffect(() => {
    fetchGenre();
  }, []);

  const fetchGenre = async () => {
    await movieController._fetchGenere();
  };

  return (
    <Background
      style={{
        backgroundColor: Colors.primary_001,
      }}>
      <View
        style={{
          backgroundColor: Colors.primary_002,
          paddingLeft: hp(1.6),
        }}>
        <Image
          source={images.Icon}
          style={{
            height: wp(16),
            width: wp(30),
          }}
          resizeMode="contain"
        />
        <BlankSpace height={hp(1.4)} />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={movieModel.getGenre()}
          renderItem={({item}) => {
            console.log(item, '::');
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.secondary_004,
                  paddingHorizontal: wp(3),
                  paddingVertical: wp(1.5),
                  borderRadius: 4,
                  marginRight: wp(2),
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
          }}
        />
        <BlankSpace height={hp(2)} />
      </View>
      {/* <View></View> */}
    </Background>
  );
};

export default Home;
