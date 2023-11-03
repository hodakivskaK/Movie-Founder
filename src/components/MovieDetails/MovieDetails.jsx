import { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { fetchMoviesDetails } from "FetchAPI";
import s from './MovieDetails.module.css'

export default function MovieDetails ()  {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

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

    const handleSubmit = () => {
        navigate(location?.state?.from ?? '/');
    }

    return (
        <section>
            {error && <div>ERROR:{error} </div>}
            <button className={s.movieBtn} onClick={handleSubmit}> <FaArrowLeft className={s.movieBtnIcon}/> </button>
            { movie && (<div className={s.movieDetail }>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} className={s.poster} />
                
                <div>
                <h1 className={s.movieTitle }> {movie.title}</h1>
                <h3 className={s.movieTitle }>User Score {movie.vote_average}</h3>
                <h3 className={s.movieTitle }>Overview:</h3>
                <p className={s.movieOverview }>{ movie.overview}</p>

                 <h3 className={s.movieTitle }>Genres:</h3>
                <p >{movie.genres.map( name  => 
                    name.name.split(" ") ).join(", ")} </p>

                </div>
            </div>) 
            }
            <div className={s.movieAdditionalSection }>
                  <h2 className={s.movieTitle }>Additional Information</h2>
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



  