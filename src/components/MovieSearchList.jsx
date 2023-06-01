
import s from './MovieSearchList.module.css'
import { Link } from 'react-router-dom';

export const MovieList = ({ movies, prevLocation }) => {
    

    return <ul className={s.moviesSearchList }>
        {movies.map(movie => 
        <li key={movie.id} className={s.moviesSearchItem}>
 <Link to={`/movies/${movie.id}`} className={s.moviesSearchLink }>{movie.title}</Link>
                
        </li>)}
        
    </ul>
}
