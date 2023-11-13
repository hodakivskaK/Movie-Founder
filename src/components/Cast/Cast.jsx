import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'FetchAPI';
import s from "./Cast.module.css"
import actorImage from '../../Image/actor_not_found.jpg';

export default function Cast()  {
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();


  useEffect(() => {
    const fetchCast = async () => {
      try {
        const res = await fetchMoviesCast(movieId);
        setCasts(res);
      } catch (error) {
        setError('ERROR');
      }
    };
    fetchCast();
    
  }, [movieId]);

    return (
        <>
      {error && <div>{error}</div>}
      <ul className={s.movieCastList }>
        {casts && casts.map(castItem => {
          return (
            <li key={castItem.id} className={s.movieCastItem }>
              <div className={s.movieCastImgBox}>
             {castItem.profile_path === null? 
              <img
                src={actorImage}
                alt={`${castItem.name} `}
                className={s.movieCastImg}
                width="100"
                height="150"
              /> : 
              <img
              src={`https://image.tmdb.org/t/p/w300${castItem.profile_path}`}
                alt={`${castItem.name} portrait`}
                className={s.movieCastImg}
          
              /> 
              }
           </div>
             
              <div className={s.movieCastDescr }>
                <p className={s.movieCastText }>Name: <span>{castItem.name}</span></p>
                <p className={s.movieCastText }>Character: <span>{castItem.character}</span></p>
              </div>
            </li>
          );
        })}
      </ul>
    
    </>
  );
}