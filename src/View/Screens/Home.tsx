import {View, Text, Image, TouchableOpacity, SectionList} from 'react-native';
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
import {Image_URL} from '../../Utils/constants';

type Props = NativeStackScreenProps<ScreenParamList, Screens.Home>;
const Home = ({navigation}: Props): JSX.Element => {
  const movieModel = useMovieModel();
  const movieController = useMovieController(movieModel);
  const Colors = useColor();

  useLayoutEffect(() => {
    fetchGenre();
  }, []);

  useEffect(() => {
    fetchMovieList();
  }, [movieModel.getPrimaryReleaseYear()]);

  const fetchGenre = async (): Promise<void> => {
    await movieController._fetchGenere();
  };

  const fetchMovieList = async (): Promise<void> => {
    await movieController._fetchMovies();
  };

  const loadMore = (): void => {
    if (movieModel.getPrimaryReleaseYear() < 2024) {
      movieModel.setPrimaryReleaseYear(movieModel.getPrimaryReleaseYear() + 1);
    }
  };

  const filterHandler = (filterId: string | number): void => {
    movieModel.setselectedGenreId(filterId);
  };

  return (
    <Background
      style={{
        backgroundColor: Colors.primary_001,
      }}>
      <View
        style={{
          backgroundColor: Colors.primary_002,
          paddingLeft: hp(1.8),
        }}>
        <Image
          source={images.Icon}
          style={{
            height: wp(16),
            width: wp(32),
          }}
          resizeMode="contain"
        />
        <BlankSpace height={hp(1.4)} />
        <FlatList
          horizontal
          initialNumToRender={10}
          showsHorizontalScrollIndicator={false}
          data={movieModel.getGenre()}
          ItemSeparatorComponent={() => <BlankSpace width={wp(2)} />}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
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
          }}
        />
        <BlankSpace height={hp(2)} />
      </View>
      {/* {console.log(movieModel.movies, '++++++++++++++++++=')} */}

      <SectionList
        sections={movieModel.movies}
        keyExtractor={(item, index) => item + index}
        onEndReached={loadMore}
        renderItem={({item}) => (
          <View>
            <Image
              source={{uri: `${Image_URL}${item.backdrop_path}`}}
              style={{height: wp(60), width: wp(60)}}
            />
          </View>
        )}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
      />
    </Background>
  );
};

export default Home;
