import {View, Text, Image, SectionList, ActivityIndicator} from 'react-native';
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
import Button from '../Components/Button';
import MovieCard from '../Components/MovieCard';

const Home = (): JSX.Element => {
  const movieModel = useMovieModel();
  const movieController = useMovieController(movieModel);
  const Colors = useColor();
  const sectionListRef = useRef<SectionList>(null);

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
          return (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: wp(4),
                }}>
                {item[0]?.backdrop_path && (
                  <MovieCard
                    image={index >= 4 ? '' : item[0].backdrop_path}
                    title={item[0].original_title}
                    popularity={item[0].popularity}
                  />
                )}
                {item[1]?.backdrop_path && (
                  <MovieCard
                    image={index >= 4 ? '' : item[1].backdrop_path}
                    title={item[1].original_title}
                    popularity={item[1].popularity}
                  />
                )}
              </View>
              <BlankSpace height={wp(4)} />
            </>
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <View style={{paddingHorizontal: wp(4), paddingVertical: wp(3)}}>
            <Text
              style={{
                color: Colors.secondary_003,
                fontSize: wp(4.8),
                fontWeight: 'bold',
                fontFamily: Fonts.Archivo_Regular,
              }}>
              {title}
            </Text>
          </View>
        )}
        onEndReachedThreshold={0.2}
        ListFooterComponent={() =>
          movieModel.isLoading && (
            <ActivityIndicator color={Colors.secondary_003} />
          )
        }
      />
    </Background>
  );
};

export default Home;
