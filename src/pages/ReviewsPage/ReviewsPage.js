import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ReviewsPage.module.css';
import * as moviesSearch_API from '../../services/api-movies';

function ReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesSearch_API.fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return reviews.length ? (
    <ul className={ styles.list}>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We do not have any reviews for this movie</p>
  );
}

export default ReviewsPage;
