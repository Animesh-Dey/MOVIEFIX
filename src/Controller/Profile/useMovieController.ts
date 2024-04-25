import {apiServices} from '../../Adapter/Axios/axiosService';
import {MovieModel} from '../../Model/Profile/useMovieModel';
import {
  _fetchGenere,
  _fetchMoviesType,
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
      if (response.results.length > 0) {
        const convertedMovies: any = {
          title: movieModel.getPrimaryReleaseYear(),
          data: [],
        };
        for (let i = 0; i < response.results.length; i += 2) {
          const innerArray = [response.results[i], response.results[i + 1]];
          convertedMovies.data.push(innerArray);
        }
        movieModel.setMovies(prev => prev.concat(convertedMovies));
      }
      return;
    } catch (error) {
      console.log(error, '_fetchMovies');
    }
  };

  return {_fetchGenere, _fetchMovies};
};
