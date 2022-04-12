import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../pages/HomePage'
import MoviesPage from '../pages/MoviesPage'
import MovieDetailsPage from 'pages/MovieDetailsPage';
import CastPage from 'pages/CastPage';
import ReviewsPage from 'pages/ReviewsPage';
import NotFoundPage from 'pages/NotFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="movies/:movieId/cast" element={<CastPage />} />
          <Route path="movies/:movieId/reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
