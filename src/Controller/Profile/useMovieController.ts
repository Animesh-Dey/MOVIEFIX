import {apiServices} from '../../Adapter/Axios/axiosService';
import {MovieModel} from '../../Model/Profile/useMovieModel';
import {
  _fetchGenere,
  _fetchMoviesType,
  convertedMovieListType,
} from '../../Model/Types/types';
import {tmdbApiKey} from '../../Utils/constants';

export const useMovieController = (movieModel: MovieModel) => {
  const _fetchGenere = async () => {
    try {
      const response: _fetchGenere = await apiServices.getCall(
        '/genre/movie/list?language=en',
      );
      movieModel.setGenre([
        {
          id: '*/*',
          name: 'All',
        },
        ...response.genres,
      ]);
      return;
    } catch (error) {
      console.log(error, '_fetchGenere');
    }
  };

  const _fetchMovies = async () => {
    try {
      const response: _fetchMoviesType = await apiServices.getCall(
        movieModel.getSelectedGenreId() === '*/*'
          ? `/discover/movie?api_key=${tmdbApiKey}&sort_by=popularity.desc&primary_release_year=${movieModel.getPrimaryReleaseYear()}&page=1&vote_count.gte=100`
          : `/discover/movie?api_key=${tmdbApiKey}&sort_by=popularity.desc&primary_release_year=${movieModel.getPrimaryReleaseYear()}&page=1&vote_count.gte=100&with_genres=${movieModel.getSelectedGenreId()}`,
      );

      const convertedMovies = {
        title: movieModel.getPrimaryReleaseYear(),
        data: [...response.results],
      };
      // console.log(convertedMovies, '::::');
      movieModel.setMovies(prev => prev.concat(convertedMovies));

      return;
    } catch (error) {
      console.log(error, '_fetchMovies');
    }
  };

  return {_fetchGenere, _fetchMovies};
};
