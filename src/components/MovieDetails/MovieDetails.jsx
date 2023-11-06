import { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { fetchMoviesDetails } from "FetchAPI";
import s from './MovieDetails.module.css'
import movieImage from '../../Image/POSTER_not_found.jpg';

export default function MovieDetails ()  {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    const { movieId } = useParams();
    const location = useLocation();


    useEffect(() => {
       
        fetchMoviesDetails(movieId)
            .then(res => {
                setMovie(res);
            })
            .catch(error => {
                setError('Ooops. Something went wrong...');
                console.log(error);
            })
      
    }, [movieId]);

    const goBack = () => {
        window.history.back();
      }

    return (
        <section>
            {error && <div>ERROR:{error} </div>}
            <button className={s.movieBtn} onClick={goBack}> <FaArrowLeft className={s.movieBtnIcon}/> </button>
            { movie && (<div className={s.movieDetail }>
                {movie.poster_path === null? 
              <img
                src={movieImage}
                alt={`poster`}
               className={s.movie_posterNot}
              /> : 
              <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster" className={s.poster } />
              }
                
                <div className={s.movieDescrBox}>
                <h1 className={s.movieTitle }> {movie.title}</h1>
                <h3 className={s.movieSubTitle }>User Score {movie.vote_average}</h3>
                <h3 className={s.movieSubTitle }>Overview:</h3>
                <p className={s.movieOverview }>{ movie.overview}</p>

                 <h3 className={s.movieSubTitle }>Genres:</h3>
                <p >{movie.genres.map( name  => 
                    name.name.split(" ") ).join(", ")} </p>

                </div>
            </div>) 
            }
            <div className={s.movieAdditionalSection }>
                  <h2 className={s.movieSubTitle }>Additional Information</h2>
            <NavLink
            to={`/movies/${movieId}/reviews`}
            className={s.movieAddLink }
            state={location.state}
          >
            <p className={s.movieAddItem }>Reviews</p>
            </NavLink>
            
            <NavLink
            to={`/movies/${movieId}/cast`}
                    state={location.state}
                    className={s.movieAddLink }
                >
            <p className={s.movieAddItem }>Casts</p>
            
          </NavLink>
                <Outlet />
            </div>
          
    </section>
        
    )
}



  