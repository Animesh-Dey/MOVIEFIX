import {View, Text, Image, TouchableOpacity, SectionList} from 'react-native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
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
import Button from '../Components/Button';

const Home = (): JSX.Element => {
  const movieModel = useMovieModel();
  const movieController = useMovieController(movieModel);
  const Colors = useColor();
  const sectionListRef = useRef<SectionList>(null);
  const [index, setIndex] = useState(0);

  useLayoutEffect(() => {
    fetchGenre();
  }, []);

  useEffect(() => {
    fetchMovieList();
  }, [movieModel.getPrimaryReleaseYear(), movieModel.getSelectedGenreId()]);

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
    sectionListRef.current?.scrollToLocation({
      animated: false,
      itemIndex: 0,
      sectionIndex: 0,
    });
    movieModel.setselectedGenreId(filterId);
    movieModel.setPrimaryReleaseYear(2012);
    movieModel.setMovies([]);
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
              <Button
                item={item}
                movieModel={movieModel}
                filterHandler={filterHandler}
              />
            );
          }}
        />
        <BlankSpace height={hp(2)} />
      </View>
      <SectionList
        ref={sectionListRef}
        sections={movieModel.movies}
        keyExtractor={(item, index) => item + index}
        onEndReached={loadMore}
        initialNumToRender={10}
        renderItem={({item, index}) => {
          console.log(index);
          return (
            <View style={{flexDirection: 'row'}}>
              {item[0]?.backdrop_path && (
                <Image
                  source={{uri: `${Image_URL}${item[0].backdrop_path}`}}
                  style={{height: wp(60), width: wp(60)}}
                />
              )}
              {item[1]?.backdrop_path && (
                <Image
                  source={{uri: `${Image_URL}${item[1].backdrop_path}`}}
                  style={{height: wp(60), width: wp(60)}}
                />
              )}
            </View>
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <View>
            <Text>{title}</Text>
          </View>
        )}
      />
    </Background>
  );
};

export default Home;
