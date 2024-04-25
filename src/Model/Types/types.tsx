import {MovieModel} from '../Profile/useMovieModel';

export type tokenType = string;
export type genreListType = {
  id: string | number;
  name: string;
}[];
export type _fetchGenere = {
  genres: genreListType;
};

export type movieListType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}[][];

export type _fetchMoviesType = {
  page: number;
  results: movieListType;
};

export type convertedMovieListType =
  | {
      title: number;
      data: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
    }
  | [];

export type innerArrayType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}[][];

export type buttonComponentType = {
  item: {
    id: string | number;
    name: string;
  };
  movieModel: MovieModel;
  filterHandler: Function;
};

export type MovieCardType = {popularity: number; image: string; title: string};

export type CrossInContainerTypes = {
  popularity: number;
  title: string;
};
