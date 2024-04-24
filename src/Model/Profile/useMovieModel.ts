import {SetStateAction, useState} from 'react';
import {genreListType} from '../Types/types';

export const useMovieModel = () => {
  const [genreList, setGenreList] = useState<genreListType>([]);

  const getGenre = (): genreListType => {
    return genreList;
  };

  const setGenre = (genreList: genreListType): void => {
    setGenreList(genreList);
  };

  return {getGenre, setGenre};
};

export type MovieModel = ReturnType<typeof useMovieModel>;
