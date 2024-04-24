import {apiServices} from '../../Adapter/Axios/axiosService';
import {MovieModel} from '../../Model/Profile/useMovieModel';
import {_fetchGenere} from '../../Model/Types/types';

export const useMovieController = (movieModel: MovieModel) => {
  const _fetchGenere = async () => {
    try {
      const response: _fetchGenere = await apiServices.getCall(
        '/genre/movie/list?language=en',
      );
      movieModel.setGenre([
        {
          id: '',
          name: 'All',
        },
        ...response.genres,
      ]);
    } catch (error) {
      console.log(error, '_fetchGenere');
    }
  };

  return {_fetchGenere};
};
