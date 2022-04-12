import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '3f733d367aa88a68e8778536d460fad2';

export async function fetchTrendingMovies() {
  const response = await axios.get(
    `/trending/all/day?api_key=${API_KEY}&include_adult=false`
  );
  return response.data.results;
}

export async function fetchMoviesBySearchQuery(searchQuery) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1&include_adult=false`
  );
  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return response.data;
}

export async function fetchMovieActors(id) {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
}

export async function fetchReviews(id) {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
}
