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
          paddingLeft: hp(2),
          position: 'relative',
        }}>
        <Image
          source={images.Icon}
          style={{
            height: wp(16),
            width: wp(30),
          }}
          resizeMode="contain"
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={movieModel.getGenre()}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Text>{item?.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* <View></View> */}
    </Background>
  );
};

export default Home;
