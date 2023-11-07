import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReview } from 'FetchAPI';
import s from './Reviews.module.css'
import { RxAvatar } from 'react-icons/rx';

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
/*               review.author_details =  {name, username, avatar_path, rating};
 */
console.log( review.author_details.avatar_path)
                return (
                    <li key={review.id} className={s.movieReviewItem }>

                <div className={s.review__authorInformation}>   
                      {review.author_details.avatar_path === null? 
              <RxAvatar className={s.review__notAvatar} />: 
              <img
              src={`https://image.tmdb.org/t/p/w300${review.author_details.avatar_path}`}
                alt={`${reviews.name} portrait`}
                className={s.review__avatarImg}
                width="60"
                height="60"
              /> 
              }
              <p className={s.movieReviewText__author }>{review.author}</p>
                </div>   

                        <p className={s.movieReviewText }>Rating: <span>{review.author_details.rating}</span></p>
                        <p className={s.movieReviewText }> Review: <span>{review.content}</span></p>
                      </li>
                )
              
      
        })}
            </ul>
            
        </>
    )
}