import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '3f733d367aa88a68e8778536d460fad2';

export async function fetchTrendingMovies() {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

// export async function fetchBooks() {
//   const response = await axios.get('/books');
//   return response.data;
// }

// export async function fetchBookById(bookId) {
//   const response = await axios.get(`/books/${bookId}?_expand=author`);
//   return response.data;
// }
