import axios from 'axios';

const API_KEY = 'c93a6a4d3a553d1e7ad5324e4c95943f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const POINTS = {
  trending: '/trending/movie/week',
  querySearch: '/search/movie',
  movieDetails: '/movie',
  movieCast: '/credits',
  movieReviews: '/reviews',
};


// Home trending 
export const getFetchTrending = async (page = 1) => {
     const url = await axios.get(
    `${POINTS.trending}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );
  return url.data.results;
};

// Search Movie
export const getFetchByQuery = async (query, page = 1) => {
  const url = await axios.get(
    `${POINTS.querySearch}?api_key=${API_KEY}&page=${page}&query=${query}&language=en-US&include_adult=false`
  );

  return url.data.results;
};

// Movie Id
export const fetchMoviesDetails = async id => {
     const url = await axios.get(
    `${POINTS.movieDetails}/${id}?api_key=${API_KEY}&language=en-US`
  );

  return url.data;
};

// Cast 
export const fetchMoviesCast = async id => {
  const url = await axios.get(
    `/movie/${id}${POINTS.movieCast}?api_key=${API_KEY}&language=en-US`
  );

  return url.data.cast;
};

// Review

export const fetchMoviesReview = async id => {
  const url = await axios.get(
    `/movie/${id}${POINTS.movieReviews}?api_key=${API_KEY}&language=en-US`
  );

  return url.data.results;
};