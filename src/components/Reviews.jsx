import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReview } from 'FetchAPI';
import s from './Reviews.module.css'

export default function Reviews () {
    const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetchMoviesReview(movieId);
        setReviews(res);
      } catch (error) {
        setError('ERROR');
      }
      };

      fetchReviews();
    
  }, [movieId]);

    return (
        < >
           {error && <div>{error}</div>}
            <ul className={s.movieReviewList }>
            {reviews && reviews.map(review => {
                return (
                    <li key={review.id} className={s.movieReviewItem }>
                        <p className={s.movieReviewText }>Author: <span>{review.author}</span></p>
                        <p className={s.movieReviewText }> <span>{review.content}</span></p>
                      </li>
                )
              
      
        })}
            </ul>
            
        </>
    )
}