import {useState} from 'react';
import {genreListType} from '../Types/types';

export const useMovieModel = () => {
  const [genreList, setGenreList] = useState<genreListType>([]);
  const [selectedGenreId, setSelectedGenreId] = useState<number | string>(
    '*/*',
  );
  const [primary_release_year, setPrimary_release_year] =
    useState<number>(2012);

  const [movies, setMovies] = useState([]);

  const getGenre = (): genreListType => {
    return genreList;
  };

  const setGenre = (genreList: genreListType): void => {
    setGenreList(genreList);
  };

  const getSelectedGenreId = (): number | string => {
    return selectedGenreId;
  };

  const setselectedGenreId = (id: number | string): void => {
    setSelectedGenreId(id);
  };

  const setPrimaryReleaseYear = (year: number): void => {
    setPrimary_release_year(year);
  };
  const getPrimaryReleaseYear = (): number => {
    return primary_release_year;
  };

  return {
    setMovies,
    movies,
    getGenre,
    setGenre,
    getSelectedGenreId,
    setselectedGenreId,
    setPrimaryReleaseYear,
    getPrimaryReleaseYear,
  };
};

export type MovieModel = ReturnType<typeof useMovieModel>;
