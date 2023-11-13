
import s from './MovieSearchList.module.css'
import { Link } from 'react-router-dom';
import movieImage from '../../Image/POSTER_not_found.jpg';

export const MovieList = ({ movies }) => {
    

    return <><ul className={s.moviesSearch__list }>
        {movies.map(movie => {
        const releaseDate= movie.release_date.split('-')
        const result = releaseDate[0];
        
        return <li key={movie.id} className={s.moviesSearch__item}>
 <Link to={`/movies/${movie.id}`} className={ s.moviesSearch__link }>
    <div className={ s.moviesSearch__descr }> 
    <p className={ s.moviesSearch__title }>{movie.title} </p> 
    <p > Year: {result}</p>
    <p> Rating: {movie.vote_average}</p>
   
    </div>
    {movie.poster_path === null? 
              <img
                src={movieImage}
                alt={`poster`}
               className={s.moviesSearch__poster}
              /> : 
              <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster" className={s.moviesSearch__img } />
              }
   
 </Link>
                
        </li>})}
        
    </ul>
    
    </>
}
